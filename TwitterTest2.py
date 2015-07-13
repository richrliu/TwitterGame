__author__ = 'richardliu'

from ApiManagement import *

hashtagArr = ['lebron', 'fallout4', 'askrachel', 'tsmwin']

if __name__ == "__main__":
    con = MongoClient()
    db = con.twitter
    htags = db.hashtags
    list = db.list

    processDataOnHashtags(hashtagArr, htags)
    hashtagString = arrToString(hashtagArr)
    print(hashtagString)
    addProcessedStringToColl(hashtagString, list)

    htags.drop()
    con.close()
