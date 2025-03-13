
def is_same_sign(a, b):
    if a >= 0 and b >= 0:
        return True
    elif a < 0 and b < 0:
        return True
    else:
        return False

def main():
    n = int(input())
    array = list(map(int, input().split()))
    for i in range(1, n):
        if is_same_sign(array[i], array[i - 1]):
            print('YES')
            return

    print("NO")


main()

        
