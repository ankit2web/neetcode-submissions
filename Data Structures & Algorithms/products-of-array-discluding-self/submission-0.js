class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const zeroCount = nums.filter(num => num === 0).length
        if (zeroCount > 1) return new Array(nums.length).fill(0)
        let product = 1
        if (zeroCount === 0) product = nums.reduce((a, b) => a * b, 1)
        else product = nums.filter(num => num !== 0).reduce((a, b) => a * b, 1)
        const res = []
        for (let num of nums) {
            if (zeroCount === 1) {
                res.push(num === 0 ? product : 0)
            } else {
                res.push(product / num)
            }
        }
        return res
    }
}
