n = int(input())
array = list(map(int, input().split()))

array.reverse()
print(*array, sep=' ')
