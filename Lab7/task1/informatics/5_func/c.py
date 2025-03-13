def xor(x, y):
    if (x and y) or (not x and not y):
        return False
    return True

x, y = tuple(map(int, input().split()))
print(int(xor(x,y)))

