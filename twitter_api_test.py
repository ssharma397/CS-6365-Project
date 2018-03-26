import csv
import twitter
api = twitter.Api(
    consumer_key='RWJVq4QaNza8zSp3IHofMrfQn',
    consumer_secret='hGbdMGnFrl9rMEmLxV3awb9FquQNluhQ9Uf4YOMEgiECErL4qu',
    access_token_key='978403297307525125-P0JGDGW8kIQGim9jAPLo3jSKpTqFE8z',
    access_token_secret='kStGABKsD5qPuAcspdy4tlm2xRIzhLY3Zkbrovl0VppqB')

hashtags_to_track = [
    '#GTComputing',
]

stream = api.GetStreamFilter(track=hashtags_to_track)

with open('tweets.csv', 'a') as csv_file:
    csv_writer = csv.writer(csv_file)
    i=0
    for line in stream:
        print i
        print line
        # Signal that the line represents a tweet
        if i==5: break
        i=i+1
        if 'in_reply_to_status_id' in line:
            tweet = twitter.Status.NewFromJsonDict(line)
            print(tweet.id)
            row = [tweet.id, tweet.user.screen_name, tweet.text]
            csv_writer.writerow(row)