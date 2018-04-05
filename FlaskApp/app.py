from flask import Flask, render_template, request, redirect, url_for, abort, session, jsonify, json
import tweepy
import os
import json
import codecs

app = Flask(__name__)
app.config['SECRET_KEY'] = 'F34TF$($e34D';

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/twitter/', methods=['GET','POST'])
def twitter():
	consumer_key = 'RWJVq4QaNza8zSp3IHofMrfQn'
	consumer_secret = 'hGbdMGnFrl9rMEmLxV3awb9FquQNluhQ9Uf4YOMEgiECErL4qu'
	access_token = '978403297307525125-P0JGDGW8kIQGim9jAPLo3jSKpTqFE8z'
	access_token_secret = 'kStGABKsD5qPuAcspdy4tlm2xRIzhLY3Zkbrovl0VppqB'
	
	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_token, access_token_secret)
	api = tweepy.API(auth,wait_on_rate_limit=True)
	
	def limit_handled(cursor):
		while True:
			try:
				yield cursor.next()
			except tweepy.RateLimitError:
				time.sleep(1)
			except tweepy.TweepError:
				print ("TweepyError 401 - protected user")

	hashtag = request.json['param']
	count = 0
	tweets={}
	tweet_list = []
	for tweet in limit_handled(tweepy.Cursor(api.search,q=hashtag,count=20,lang="en",since="2018-04-04").items()):
		post=tweet.text
		if post not in tweet_list:
			tweet_list.append(post)
		if(len(tweet_list) == 20):
			break
	
	for ele in tweet_list:
		tweets[count] = ele
		count = count + 1
	print ("The number of tweets is: ", len(tweets))
	print ("done")
	tweets = jsonify(tweets)
	return tweets
	
@app.route('/insta/', methods=['GET','POST'])
def insta():
	insta_hashtag = request.json['param']
	os.system("instagram-scraper --tag " + insta_hashtag + " --media-metadata --maximum 20")
	#os.system("mv " + insta_hashtag + "/ static/")
	
	path = insta_hashtag + "/" + insta_hashtag + ".json"
	data = json.load(open(path))
	print ("first is: ")
	print (str(data[0]['edge_media_to_caption']['edges'][0]['node']['text']))
	data = jsonify(data)
	return data

if __name__ == '__main__':
    app.run()