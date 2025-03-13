import math

n = int(input())

def is_square(num: int) -> bool:
    return math.sqrt(num) == int(math.sqrt(num))

i = 1
while i <= n:
    if is_square(i):
        print(i)
    i += 1

