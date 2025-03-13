def power(a, n):
    return a ** n

a, n = tuple(map(float, input().split()))
print(power(a, int(n)))
