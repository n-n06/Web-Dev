x = int(input())

i = x
sum = 0
while i > 0:
    sum += (i % 10)
    i //= 10

print(sum)
