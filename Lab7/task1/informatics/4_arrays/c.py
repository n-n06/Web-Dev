

n = int(input())
array = list(map(int, input().split()))

num = 0
for element in array:
    if element > 0:
        num += 1

print(num)
