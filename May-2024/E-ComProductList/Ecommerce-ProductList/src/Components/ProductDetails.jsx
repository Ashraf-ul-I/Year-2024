import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumps from './BreadCrumps';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            if (res.ok) {
                const data = await res.json();
                setProduct(data);
            } else {
                console.log('There has been an error fetching the data');
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-white   shadow-lg w-[60%] h-[40%] p-6 mx-auto mt-3'>
            <BreadCrumps/>
            <p className='mt-2 flex justify-between '>
                <p className='font-bold text-s '>Rating: {product.rating}</p>
                <p className='font-bold text-2xl '>Price: ${product.price}</p>
            </p>
            <div className='w-full flex h-1/2 justify-center items-center'>
                <img src={product.thumbnail} alt={product.title} className='w-[50%] h-[50%] ' />
            </div>
            <hr className='my-4' />
            <div>
                <h1 className='text-3xl text-gray-600 font-bold'>{product.title}</h1>
                <p className='mt-2 text-xl text-gray-500'>{product.description}</p>
                <p className='mt-2 text-xl text-black-500'>Item in stock: {product.stock}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
