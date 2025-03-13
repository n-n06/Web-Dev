n = int(input())
array = list(map(int, input().split()))

count = 0

for i in range(1, n - 1):
    if array[i] > array[i - 1] and array[i] > array[i + 1]:
        count += 1

print(count)
