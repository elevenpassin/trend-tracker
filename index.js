const Twitter = require('twitter');
const chalk = require('chalk');
const dotenv = require('dotenv');
dotenv.config();
const log = console.log;

const TOPIC = 'javascript';
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const stream = client.stream('statuses/filter', {
  track: TOPIC,
});

stream.on('data', function(event){
  log(`${chalk.white.bgBlue(event.user.name)} tweets:`);
  log(event.text);
  log('****************************************');
});

stream.on('error', function(error) {
  throw error;
});
