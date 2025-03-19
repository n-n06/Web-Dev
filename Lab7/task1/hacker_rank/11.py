def merge_the_tools(string, k):
    n = len(string)
    s = ''
    occured = set()
    for i in range(n):
        if string[i] not in occured:
            s += string[i]
        occured.add(string[i])
        
        if (i + 1) % (k) == 0:
            print(s)
            s = ''
            occured = set()

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)
