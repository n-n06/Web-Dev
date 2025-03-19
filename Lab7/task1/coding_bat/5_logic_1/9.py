
def near_ten(num):
  li = [num-2,num-1,num,num+1,num+2]
  
  for el in li:
    if el % 10 == 0:
      return True
      
  return False
