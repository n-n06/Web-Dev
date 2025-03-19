def in1to10(n, outside_mode):
  if outside_mode:
    return n <= 2 or n >= 10
  
  return n in range(1, 11)
