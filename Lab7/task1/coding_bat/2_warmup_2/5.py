def last2(str):
  sub = str[-2:]
  n = 0
  for i in range(0, len(str) - 2):
    if str[i] + str[i + 1] == sub:
      n += 1
      
  return n
