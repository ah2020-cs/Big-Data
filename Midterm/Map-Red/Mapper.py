#!/usr/bin/python

import sys, random
from heapq import heappush, heapreplace

k = 200
H = []

for x in sys.stdin:
  r = random.randint(0, 200)
  if len(H) < k: 
    heappush(H, (r, x))
  elif r > H[0][0]: 
    heapreplace(H, (r, x))

for (r, x) in H:
  # by negating the id, the reducer receives the elements from highest to lowest 
  print('%ft%s' % (-r, x)),