#!/usr/bin/env python
"""An advanced Reducer, using Python iterators and generators."""

from itertools import groupby
from operator import itemgetter
import sys

# receive the output of a mapper, (key, [value, value, ...])
def read_mapper_output(input):
    data_list = []
    for line in input:
        #  return each (key, [value, value, ...]) tuple, though there should only be one per line
        data_list.append([line.split()])
    
    #print(data_list)
    unique=len(data_list)

    for item in data_list: 
        #print(item[0][0]+" "+item[0][1]+"/"+unique)
        print(item[0][0], end ="  ")
        print(item[0][1], end ="")
        print("/", end ="")
        print(unique)

def main():
    # input comes from STDIN (standard input)
    data = read_mapper_output(sys.stdin)

    #print(data)

    # groupby groups multiple word-count pairs by word
    # and creates an iterator that returns consecutive keys and their group:
    #   current_word - string containing a word (the key)
    #   group - iterator yielding all ["&lt;current_word&gt;", "&lt;count&gt;"] items
    '''
    print(unique)
    print(data)
    for word in list(data):
        print(word)
        print(word[0]+" "+word[1]+"/"+unique)

    
    for current_word, group in groupby(data, itemgetter(0)):
        print(current_word + " :", list(group))
        print("reached")
        try:
            print("reached")
            total_count = sum(int(count) for current_word, count in group)
            #ratio = total_count+'/'+unique
            print("%s%s%d" % (current_word, separator, total_count))
        except ValueError:
            print("not-reached")
            # count was not a number, so silently discard this item
            pass
    '''


if __name__ == "__main__":
    main()
