import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
            .then((res) => {
                setLoading(false);
                setSingleProduct(res)
            })



    }, [id]); // Include id in the dependency array

    return (
        <div>
            <h2>Product Details</h2>

            {!loading && singleProduct ? (
                <div style={{ display: "flex" }}>
                    <img
                        style={{ height: 300 }}
                        src={singleProduct.thumbnail} alt={singleProduct.title} />
                    <div style={{ marginLeft: "40px" }}>
                        <h2>{singleProduct.title}</h2>
                        <h3>${singleProduct.price}</h3>
                        <h3>{singleProduct.description}</h3>
                    </div>
                </div>
            ) : <p>Loading..</p>}

        </div>
    )
}

export default ProductDetails
