
const twoSum=(array,target)=>{

    let left=0;
    let right=array.length-1;
    while(left<right){
       let sum=array[left]+array[right]
        if(sum===target){
            return [left,right]
        }else{
            if(sum<left){
                left++
            }else{
                right--
            }
        }

    }


};

console.log(twoSum([2,8,11,15,7],9))