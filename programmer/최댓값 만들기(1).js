function makeMax(nums) {
  nums.sort((a, b) => b - a)
  return nums[0] * nums[1]
}
console.log(makeMax([0, 31, 24, 10, 1, 9]	));