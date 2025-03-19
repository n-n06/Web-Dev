
def end_other(a, b):
  if len(a) < len(b):
    return b.lower().endswith(a.lower())
  else:
    return a.lower().endswith(b.lower())
