def centered_average(nums):
  nums = sorted(nums)[1:-1]
  return sum(nums) // len(nums)
