
export function fetchAllProduct() {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        resolve({ data });

    })
}

export function fetchProductsByFilters(filter) {

    //filter objects ={"category":"smaartphone"}
    console.log(filter);
    let queryString = "";
    for (let key in filter) {
        queryString += `${key}=${filter[key]}&`  // why & because its can handle more than one process
    }
    console.log("queryStering", queryString);

    return new Promise(async (resolve) => {
        const response = await fetch(`http://localhost:8080/products?${queryString}`);
        const data = await response.json();
        console.log(data);
        resolve({ data });

    })
}