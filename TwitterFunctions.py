__author__ = 'richardliu'
import json

def arrToString(arr):
    str = ''
    for elem in arr:
        str += '[' + elem + ']'
    return str

def stringToArr(str):
    str = str[1:-1]
    arr = set(str.split(']['))
    return arr

# def checkIfStringContains(haystack, needle):
#     str = '[' + needle + ']'
#     if haystack.__contains__(str):
#         return True
#     return False

def addWordToColl(str, coll):
    original = coll.find({"_id":1})[0]['list']
    entry = '[' + str + ']'
    if entry not in original:
        original += entry
    coll.update({"_id":1},{"_id":1, "list":original})

def addProcessedStringToColl(str, coll):
    arr = str[1:-1].split('][')
    for word in arr:
        addWordToColl(word, coll);
