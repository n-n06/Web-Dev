
def parrot_trouble(talking, hour):
  if not talking:
    return False
  
  return hour < 7 or hour > 20
