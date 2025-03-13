x = int(input())

digits = []

i = x
while i > 0:
    digits.append(i % 10)
    i //= 10

x_rev = ''.join(map(str, digits))
print(x_rev.lstrip('0'))
