let nums = [5,7,2,4]
console.log(nums);
let [a,b,c,d] = nums;
console.log(a,b,c,d)
// or if you want to skip a value
let [e,f,,g]=nums
console.log(e,f,g)