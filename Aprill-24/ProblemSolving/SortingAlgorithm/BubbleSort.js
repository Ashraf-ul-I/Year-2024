
const swap = (arr, value1, value2) => {
    let temp = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = temp;

}

const BubbleSort = (arr) => {

    const arrayLength = arr.length;
    for (let index = 0; index < arrayLength; index++) {
        for (let j = 0; j < arrayLength - 1 - index; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }

    }

    return arr;

}

console.log(BubbleSort([29, 1, 14, 14, 37, 12]))