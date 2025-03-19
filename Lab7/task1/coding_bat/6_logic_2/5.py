def round10(n):
  if n % 10 >= 5:
    return n + 10 - (n % 10)
  else:
    return n - (n % 10)

def round_sum(a, b, c):
  return sum(map(round10, (a,b,c)))
