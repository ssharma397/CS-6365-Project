import urllib2
import json
import datetime
import csv
import time

app_id = "1607399812662227"
app_secret = "5nx2J80-JaLhJx3dLFA-LpL2of4"
access_token = app_id + "|" + app_secret

page_id = 'nytimes'


def request_until_succeed(url):
    req = urllib2.Request(url)
    success = False
    while success is False:
        try:
            response = urllib2.urlopen(req)
            if response.getcode() == 200:
                success = True
        except Exception, e:
            print e
            time.sleep(5)

            print "Error for URL %s: %s" % (url, datetime.datetime.now())

    return response.read()

def testFacebookPageFeedData(page_id, access_token):
    # construct the URL string
    base = "https://graph.facebook.com/v2.12"
    node = "/" + page_id + "/feed"  # changed
    parameters = "/?access_token=%s" % access_token
    url = base + node + parameters

    # retrieve data
    data = json.loads(request_until_succeed(url))

    print json.dumps(data, indent=4, sort_keys=True)


testFacebookPageFeedData(page_id, access_token)



