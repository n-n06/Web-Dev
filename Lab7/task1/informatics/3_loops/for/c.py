import math

def is_perfect_square(x : int) -> bool:
   return math.sqrt(x) == int(math.sqrt(x)) 

a = int(input())
b = int(input())

for i in range(a, b + 1):
    if is_perfect_square(i):
        print(i, end=" ")

