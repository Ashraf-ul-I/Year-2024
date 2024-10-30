const stockSellingPrice=(strockPrice)=>{
  
    let lowestPrice=strockPrice[0];
    let highestStock=0;
    for(let i=0;i<strockPrice.length;i++){
        if(strockPrice[i]<lowestPrice){
            lowestPrice=strockPrice[i];
        }
        else{
            let profit=strockPrice[i]-lowestPrice;
            if(profit>highestStock){
                highestStock=profit
            }
        }
    }
    return `${lowestPrice} ${highestStock}`;
}

console.log(stockSellingPrice([7,1,5,3,6,4]))