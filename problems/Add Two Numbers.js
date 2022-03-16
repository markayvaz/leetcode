let twoSum = (nums, target) => {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const required = target - nums[i];
    if (seen.has(required)) {
      return [seen.get(required), i];
    }
    seen.set(nums[i], i);
  }
};

let res = twoSum([1, 2, 9, 4], 6);

console.log(res);
