import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [trendingProducts, setTrendindgProducts] = useState([])

    useEffect(() => {

        const products = async () => {
            await fetch(`https://dummyjson.com/products`).then(res => res.json())
                .then((res) => {
                    const sliceTrending = res.products.slice(0, 6);
                    setTrendindgProducts(sliceTrending)
                })

        }

        products();

    }, []) //if the array empty then it calls only one time when the pages is reload
    return (
        <div>
            <h2>Home Page</h2>
            <span>trending Products</span>

            <div className='product-grid'>
                {
                    trendingProducts.map((product) => {
                        return <div className='product-card' key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    })
                }

            </div>
            <Link to="/products">
                <button style={{ width: "100%", padding: 10, color: "blue" }}>View All Products</button>
            </Link>
        </div>
    )
}

export default Home