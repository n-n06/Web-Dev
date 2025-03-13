bin_num = input()

dec_num = 0

for i in range(len(bin_num)):
    dec_num += (int(bin_num[len(bin_num) - 1 - i]) * (2 ** i))

print(dec_num)
