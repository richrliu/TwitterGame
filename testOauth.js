var OAuth = require('oauth').OAuth;

consumer = new OAuth('http://term.ie/oauth/example/request_token.php',
                    'http://term.ie/oauth/example/access_token.php',
                    'key', 'secret', '1.0',
                    null, 'HMAC-SHA1');

// Get the request token                    
consumer.getOAuthRequestToken(function(err, oauth_token, oauth_token_secret, results ){
    console.log('==>Get the request token');
    console.log(arguments);
    // Get the authorized access_token with the un-authorized one.
	consumer.getOAuthAccessToken('requestkey', 'requestsecret', function (err, oauth_token, oauth_token_secret, results){
	    console.log('==>Get the access token');
	    console.log(arguments);
	    var url='http://term.ie/oauth/example/echo_api.php?method=foo&bar=baz';
		consumer.get(url,'accesskey', 'accesssecret', function (err, data, response){
		    console.log('==>Access the protected resource with access token');
		    console.log(data);
		});
	});
});




