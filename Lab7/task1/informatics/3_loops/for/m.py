zero_count = 0

n = int(input())

for i in range(n):
    num = int(input())
    if num == 0:
        zero_count += 1

print(zero_count)
