const arrayChunk=(array,chunk)=>{

    let newArray=[];

   for(let i=0;i<array.length;i+=chunk){
      newArray.push(array.slice(i,i+chunk))
   }
  return newArray
}

console.log(arrayChunk([1,2,3,4,5,6,7,8],3))

//anotherMethod

const arrayChunks = (array, chunkSize) => {
    let newArray = [];
    let index = 0;

    while (index < array.length) {
        let chunk = [];
        for (let i = 0; i < chunkSize && index < array.length; i++) {
            chunk.push(array[index]);
            index++;
        }
        newArray.push(chunk);
    }

    return newArray;
};

console.log(arrayChunks([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
