import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const ProductList = () => {
    const product = useSelector(productList);
    const dispatch = useDispatch();
    return (
        <div>ProductList</div>
    )
}

export default ProductList