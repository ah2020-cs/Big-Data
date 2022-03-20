#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys
import re

def read_input(input):
    for line in input:
        # split the line into words; keep returning each word
        line = re.sub("[^a-z0-9]", " ", line.lower())
        '''if len(line.split())<3:
            continue
        else:'''
        yield line

def main(separator='\t'):
    # input comes from STDIN (standard input)
    data = read_input(sys.stdin)

        # write the results to STDOUT (standard output);
        # what we output here will be the input for the
        # Reduce step, i.e. the input for reducer.py
        #
        # tab-delimited; the trivial word count is 1
    for word in data:
        print('%s%s' % (word, separator))

# how to test locally in bash/linus: cat <input> | python mapper.py
if __name__ == "__main__":
    main()

