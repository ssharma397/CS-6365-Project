import tweepy
import csv
import pandas as pd
####input your credentials here

def get_tweets(hash_tag):
    consumer_key = 'RWJVq4QaNza8zSp3IHofMrfQn'
    consumer_secret = 'hGbdMGnFrl9rMEmLxV3awb9FquQNluhQ9Uf4YOMEgiECErL4qu'
    access_token = '978403297307525125-P0JGDGW8kIQGim9jAPLo3jSKpTqFE8z'
    access_token_secret = 'kStGABKsD5qPuAcspdy4tlm2xRIzhLY3Zkbrovl0VppqB'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth,wait_on_rate_limit=True)
    #####United Airlines
    # Open/Create a file to append data
    #csvFile = open('tweets.csv', 'a')
    #Use csv Writer
    #csvWriter = csv.writer(csvFile)
    tweets=[]
    for tweet in tweepy.Cursor(api.search,q=hash_tag,count=10,lang="en",since="2018-03-30").items():
        #csvWriter.writerow([tweet.created_at, tweet.text.encode('utf-8')])
        tweets.append(tweet.text.encode('utf-8'))
    return tweets

