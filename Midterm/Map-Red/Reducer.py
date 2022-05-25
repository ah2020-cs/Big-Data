#!/usr/bin/python

import sys

k = 200
c = 0

for line in sys.stdin:
  #(r, x) = line.split('t', 1)
  print(line)
  c += 1
  if c == k: break