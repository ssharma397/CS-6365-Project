from flask import Flask, render_template, request, redirect, url_for, abort, session, jsonify, json
import tweepy
import os
import json
import codecs
import facebook

app = Flask(__name__)
app.config['SECRET_KEY'] = 'F34TF$($e34D'

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
		#print (tweet.text)
		#print ("")
		post=tweet.text
		if post not in tweet_list:
			tweet_list.append(tweet.user.name + ": + " + post)
		if(len(tweet_list) == 20):
			break
	for ele in tweet_list:
		tweets[count] = ele
		count = count + 1
	print ("The number of tweets is: ", len(tweets))
	print ("done")
	tweets = jsonify(tweets)
	return tweets

@app.route('/fb/', methods=['GET','POST'])
def fb():
	token = "EAACEdEose0cBAI9bRg3t5OQxTJeGbenoUaRhmvSq2XCmZByubtQYW9DZADh6hOz9kHpZCITHQzGDbs4gUhV2z1O5ALH014Fn95IpOnztpXWJQ1HJyP6ZB4gmUhjvZCOeDNeSeSZCUqWCzVLaCbgoSEenSFDLRbHLALKPTJE3DGRZC4Tx5OrKsWJqg6sghZCIzfgZD"
	id = request.json['param']
	graph = facebook.GraphAPI(token)
	page_id = id + '/feed'
	page = graph.get_object(page_id)
	posts=jsonify(page)
	return posts
	
	'''
@app.route('/insta/', methods=['GET','POST'])
def insta():
	insta_hashtag = request.json['param']
	os.system("instagram-scraper --tag " + insta_hashtag + " --media-metadata --maximum 20")
	os.system("rm -R static/" + insta_hashtag)
	os.system("mv " + insta_hashtag + "/ static/")
	path = insta_hashtag + "/" + insta_hashtag + ".json"
	return path
    '''
if __name__ == '__main__':
    app.run()
