const swap = (arr, value1, value2) => {
    let temp = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = temp;

}

const SelectionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let smallValue = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallValue] > arr[j]) {
                smallValue = j;

            }
        }

        if (smallValue !== i) {
            swap(arr, smallValue, i);
        }
    }



    return arr;

}

console.log(SelectionSort([29, 1, 14, 14, 37, 12]));