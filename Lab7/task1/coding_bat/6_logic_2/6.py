def is_close(x, y):
    return abs(x - y) <= 1

def is_far(x, y):
    return abs(x - y) >= 2

def close_far(a, b, c):
  if is_close(a, b) and is_far(a, c) and is_far(b, c):
      return True

  if is_close(a, c) and is_far(a, b) and is_far(b, c):
      return True

  return False
