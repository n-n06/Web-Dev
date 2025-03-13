def main():
    n = int(input())

    i = 2
    while i <= n:
        if n % i == 0:
            print(i)
            return
        i += 1

main()
