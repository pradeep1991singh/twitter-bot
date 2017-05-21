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
export TWITTER_BOT_CONSUMER_KEY=your_app_consumer_key
export TWITTER_BOT_CONSUMER_SECRET=your_app_consumer_secret
export TWITTER_BOT_ACCESS_TOKEN=your_app_access_token
export TWITTER_BOT_ACCESS_TOKEN_SECRET=your_app_access_token_secret
```

## Usage
- Open new terminal and type

```sh
$ node index.js
$ prompt: msg: Hello from twitter bot!
$ Tweet posted: Hello from twitter bot!
```
