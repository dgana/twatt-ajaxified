var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.json');

var client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

router.get('/twitter', function(req,res){
  const search_query = req.query.q
  client.get('statuses/user_timeline', {q: search_query}, function(error, tweets, response) {
     res.json(tweets);
  });
})


router.get('/search', function(req,res){
  const search_query = req.query.q
  client.get('search/tweets', {q: search_query}, function(error, tweets, response) {
     res.json(tweets);
  });
})

module.exports = router;
