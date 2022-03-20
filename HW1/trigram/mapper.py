#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys
import re

def read_input_tri(input):
    for line in input:
        # split the line into words; keep returning each word
        line = re.sub("[^a-z0-9]", " ", line.lower())
        if len(line.split())<3:
            continue
        else:
            tri_gram = line.split()
            for z in range(0,len(tri_gram)-2,1):
                trgrm1 = tri_gram[z]
                trgrm2 = tri_gram[z+1]
                trgrm3 = tri_gram[z+2]
                yield (trgrm1 +' '+trgrm2+' '+trgrm3)


def main(separator='\t'):
    # input comes from STDIN (standard input)
    data = read_input_tri(sys.stdin)

    for word in data:
            print('%s%s%d' % (word, separator, 1))


# how to test locally in bash/linus: cat <input> | python mapper.py
if __name__ == "__main__":
    main()



