import tweepy
import csv
import pandas as pd
####input your credentials here
consumer_key = 'RWJVq4QaNza8zSp3IHofMrfQn'
consumer_secret = 'hGbdMGnFrl9rMEmLxV3awb9FquQNluhQ9Uf4YOMEgiECErL4qu'
access_token = '978403297307525125-P0JGDGW8kIQGim9jAPLo3jSKpTqFE8z'
access_token_secret = 'kStGABKsD5qPuAcspdy4tlm2xRIzhLY3Zkbrovl0VppqB'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth,wait_on_rate_limit=True)
#####United Airlines
# Open/Create a file to append data
csvFile = open('ua.csv', 'a')
#Use csv Writer
csvWriter = csv.writer(csvFile)

for tweet in tweepy.Cursor(api.search,q="#unitedAIRLINES",count=100,
                           lang="en",
                           since="2017-04-03").items():
    print (tweet.created_at, tweet.text)
    csvWriter.writerow([tweet.created_at, tweet.text.encode('utf-8')])