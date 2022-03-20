#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys
import re

def read_input_bi(input):
    for line in input:
        # split the line into words; keep returning each word
        line = re.sub("[^a-z0-9]", " ", line.lower())
        if len(line.split())<3:
            continue
        else:
            bi_gram = line.split()
            for y in range(0,len(bi_gram)-1,1):
                bgrm1 = bi_gram[y]
                bgrm2 = bi_gram[y+1]
                yield (bgrm1 +' '+bgrm2)

def main(separator='\t'):
    # input comes from STDIN (standard input)
    data = read_input_bi(sys.stdin)

    for word in data:
            print('%s%s%d' % (word, separator, 1))

# how to test locally in bash/linus: cat <input> | python mapper.py
if __name__ == "__main__":
    main()

