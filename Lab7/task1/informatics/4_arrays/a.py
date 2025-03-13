n = int(input())
array = list(map(int, input().split()))

print(*[array[i] for i in range(len(array)) if i % 2 == 0], sep=" ")
