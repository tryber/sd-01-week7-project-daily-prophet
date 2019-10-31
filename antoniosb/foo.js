function (user, context, callback) {

  // Roles should only be set to verified users.
  if (!user.email || !user.email_verified) {
    return callback(null, user, context)
  }

  user.app_metadata = user.app_metadata || {}
  // You can add a Role based on what you want
  // In this case I check domain
  const addRolesToUser = function (user) {
    if (user.identities.filter((identity) => identity.connection === 'betrybe-com').length > 0) {
      return ['all'];
    }
    else {
      var options = {
        method: 'POST',
        url: `https://${auth0.domain}/oauth/token`,
        headers: { 'content-type': 'application/json' },
        body: `{"client_id":"mJ6ViAl96qnTowxdKeMvIpZdTuHLUJN5","client_secret":"95yscYaU4qdXd9vhkr9LDuplay8c-EIhK2xojm3N453N657bKNhc_2SSRuVw62oH","audience":"https://${auth0.domain}/api/v2/","grant_type":"client_credentials"}`
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let jsonBody = JSON.parse(body);
        let accessToken = jsonBody.access_token;
        var options = {
          method: 'GET',
          url: `https://${auth0.domain}/api/v2/users/${user.user_id}/roles`,
          headers: { authorization: `Bearer ${accessToken}` }
        };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

          let jsonBody = JSON.parse(body);
          let userRoles = jsonBody.map((e) => (e.name));

          console.log(userRoles);
          return userRoles;
        });
      });
    }
  };

  const roles = addRolesToUser(user);
  console.log("ROLES = " + roles);

  user.app_metadata.roles = roles;
  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(function () {
      context.idToken['https://course.betrybe.com/roles'] = user.app_metadata.roles;
      callback(null, user, context);
    })
    .catch(function (err) {
      callback(err);
    });
}
