function subset(nums) {

    let temp = [];
    let arr = [];

    function recursiveSubset(nums, i) {
        if (i === nums.length) {
            return arr.push([...temp]);

        }
        console.log(`**********   ${i} th number bar cholse $$$$$$$$$ \n\n\n`)
        console.log("temp =", temp);
        console.log("array =", arr);
        // temp.push(nums[i]);
        console.log("nums==", nums)
        console.log(' temp.push(nums[i]) === ', temp.push(nums[i]));
        recursiveSubset(nums, i + 1);
        // temp.pop();
        console.log(' temp.pop()==', temp.pop())
        console.log("temp =", temp);
        console.log("tarray=", arr);
        console.log(`**********    close hoiche $$$$$$$$$ \n\n\n`)
        recursiveSubset(nums, i + 1)
        console.log("nums==", nums);

    }
    recursiveSubset(nums, 0)
    return arr;
}

console.log(subset([1, 2, 3], 0))

//rxrreducer