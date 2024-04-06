//QUes Gievn an integer array nums,find the subarray with the l;argest sum and return its sum.

function maxSubArray(nums) {

    let MaxSum = nums[0];
    let startIdx = 0;
    let endx = 0;
    let saveMaxArray = [];
    for (let i = 0; i < nums.length; i++) {

        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {

            currentSum = currentSum + nums[j];
            if (currentSum > MaxSum) {
                MaxSum = currentSum;
                startIdx = i;
                endx = j;

            }

        }
        for (startIdx; startIdx <= endx; startIdx++) {
            saveMaxArray.push(nums[startIdx]);
        }
    }

    // return {
    //     sum:
    //         MaxSum,
    //     subArray: nums.slice(startIdx, endx + 1)
    // };
    return {
        sum:
            MaxSum,
        subArray: saveMaxArray
    };

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];
//     let startIdx = 0;
//     let endIdx = 0;
//     let currentStartIdx = 0;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > currentSum + nums[i]) {
//             currentStartIdx = i;
//             currentSum = nums[i];
//         } else {
//             currentSum += nums[i];
//         }

//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//             startIdx = currentStartIdx;
//             endIdx = i;
//         }
//     }

//     let maxSubArray = [];
//     for (let i = startIdx; i <= endIdx; i++) {
//         maxSubArray.push(nums[i]);
//     }

//     return {
//         sum: maxSum,
//         subArray: maxSubArray
//     };
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
