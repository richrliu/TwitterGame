__author__ = 'richardliu'

import requests
from requests_oauthlib import OAuth1
import json
from pymongo import MongoClient
from TwitterFunctions import *
from ApiManagement import *

if __name__ == "__main__":
    con = MongoClient()
    db = con.twitter
    list = db.list
    if list.count() == 0:
        list.insert({"_id":1, "list":''})
    trendingHashtagArr = requestTrendsAtLocation(23424977)
    for hashtag in trendingHashtagArr:
        addWordToColl(hashtag, list)

    cursor = list.find({"_id":1})
    str = json.dumps(cursor[0]['list'])
    print(str)
    con.close()

