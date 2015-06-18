__author__ = 'richardliu'

import requests
from requests_oauthlib import OAuth1
import json
from pymongo import MongoClient
from TwitterFunctions import *

def requestTrendsAtLocation(location):
    ckey = 'oZCz1zkJwn3MaCgF9U33CQsK3'
    csecret = 'DkTjEPefQMnSpcxMofq5UkII4XEZajAE9d9w7ojweZIFYKAkQT'
    atoken = '479153124-1TKHoCzevmGAe9mMFxbld8P0OOXoCtd0R1M154G5'
    asecret = 'Df9PeMalswpheIMqhiPjSwzTQZhzyOnqS5WiwxZRIc2PD'
    url = 'https://api.twitter.com/1.1/trends/place.json'
    url = url + '?id=' + str(location)
    auth = OAuth1(ckey, csecret, atoken, asecret)

    r = requests.get(url, auth=auth)
    parsed = json.loads(r.text)

    outputArr = [];
    for trend in parsed[0]['trends']:
        if trend['name'].startswith('#'):
            outputArr.append(trend['name'])
    return outputArr

def processDataOnHashtags(hashtagArr, coll):
    ckey = '7b2e644deef137ac704a5c7e25336ba00557269e5'
    csecret = '9e85d43b8ad1b398208bf008e489a460'
    token = '123eedd4ccd7cb9834cf67934cff4bfe0557269e5'
    tokensecret = 'a388ca35a5330da1902227313e46a213'
    url = 'https://ritetag.com/api/v2/historical-data/'
    auth = OAuth1(ckey, csecret, token, tokensecret)
    for hashtag in hashtagArr:
        urlurl = url + hashtag
        print(urlurl)
        r = requests.get(urlurl, auth=auth)

        parsed = json.loads(r.text)
        totalCount = 0
        collection = parsed['data']

        for day in collection:
            print(day['date'] + ': ' + str(day['unique']))
            totalCount += day['unique']

        print(parsed['hashtag'])
        print(totalCount)
        coll.insert({'hashtag':hashtag, 'count':totalCount})