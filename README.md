# twitter-bot
Post status to twitter

## Installation

```sh
$ git clone git@github.com:pradeep1991singh/twitter-bot.git
$ cd twitter-bot
$ npm i
```

## Create new twitter app
- Visit [https://apps.twitter.com](https://apps.twitter.com/)
- Get consumer_key, consumer_secret
- Create access token
- Get access_token, access_token_secret
- Save all the keys to environment variables (recommended for security reasons)
- Save env variable to `.bashrc` present at your home directory (create if not there)

```sh
# twitter bot keys
export TWITTER_BOT_CONSUMER_KEY=ulKavQ2A2QtA2ErUUOu1zuqcS
export TWITTER_BOT_CONSUMER_SECRET=3iiGc0WNIqSTRt9oCHYc1HuMQq0yvgT0iJlKpE6IEXEDkx4EwB
export TWITTER_BOT_ACCESS_TOKEN=254883785-zzZpEbYNlz6wGPJ8RsP76oYVVmX2tsTuEX3wqgJT
export TWITTER_BOT_ACCESS_TOKEN_SECRET=Zh91R9eogTQ4VgxD13PUUtqyZb2rtXym31NPIn2V3Y9V8
```

## Usage
- Open new terminal and type

```sh
$ node index.js
$ prompt: msg: Hello from twitter bot!
$ Tweet posted: Hello from twitter bot!
```
