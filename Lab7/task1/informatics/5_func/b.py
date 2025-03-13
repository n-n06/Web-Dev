def power(a, n):
    return a ** n

a, n = tuple(map(int, input().split()))
print(power(a, n))
