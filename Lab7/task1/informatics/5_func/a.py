

def min(a,b,c,d):
    if all((a <= b, a <= c, a <= d)):
        return a
    elif all((b <= a, b <= c, b <= d)):
        return b
    elif all((c <= a, c <= b, c <= d)):
        return c
    elif all((d <= a, d <= b, d <= c)):
        return d

nums = tuple(map(int, input().split()))
print(min(*nums))
        
