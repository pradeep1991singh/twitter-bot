var Twit = require('twit');
var util = require('util');
var prompt = require('prompt');

var twitterBot = new Twit({
  consumer_key: process.env.TWITTER_BOT_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_BOT_CONSUMER_SECRET,
  access_token: process.env.TWITTER_BOT_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_BOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 2 * 60 * 1000,
});

prompt.start();

prompt.get(['msg'], function (err, result) {
  if (err) { return onErr(err); }

  // post status
  twitterBot.post(
    'statuses/update',
    { status: result.msg },
    function(error, data, response) {
      if (error) {
        console.log(error)
      } else {
        console.log('Tweet posted: ' + data.text);
      }
    }
  );
});

function onErr(err) {
  console.log(err);
  return 1;
}
