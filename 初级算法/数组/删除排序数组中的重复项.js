/**
 *  示例 1:

    给定数组 nums = [1,1,2], 

    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

    你不需要考虑数组中超出新长度后面的元素。
    示例 2:

    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let index = 0;

    if (!nums) {
        return 0;
    }

    while (index < nums.length) {
        if (nums.slice(0, index).includes(nums[index])) {
            nums.splice(index, 1);
        } else {
            index ++;
        }
    }

    return nums.length;
};

const result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

console.log(result);