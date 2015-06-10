__author__ = 'richardliu'

import requests
from requests_oauthlib import OAuth1
import json

ckey = '7b2e644deef137ac704a5c7e25336ba00557269e5'
csecret = '9e85d43b8ad1b398208bf008e489a460'
token = '123eedd4ccd7cb9834cf67934cff4bfe0557269e5'
tokensecret = 'a388ca35a5330da1902227313e46a213'

url = 'https://ritetag.com/api/v2/historical-data/'
hashtag = 'ball'


auth = OAuth1(ckey, csecret, token, tokensecret)

urlurl = url+hashtag
print(urlurl)

r = requests.get(urlurl, auth = auth)

parsed = json.loads(r.text)
totalCount = 0
collection = parsed['data']

for day in collection:
    print(day['date'] + ': ' + str(day['unique']))
    totalCount += day['unique']

print(parsed['hashtag'])
print(totalCount)