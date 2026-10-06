class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        // for(let [i, num] of Object.entries(nums)) {
        //     map.set(num, Number(i))
        // }

        for(let [i, num] of Object.entries(nums)) {
            const diff = target - num
            if(map.has(diff))   return [map.get(diff), Number(i)]
            map.set(num, Number(i))
        }
    }
}
