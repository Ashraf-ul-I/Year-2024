// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumps from './BreadCrumps';
import { FaShoppingCart } from 'react-icons/fa';
import { Alert, Button } from 'flowbite-react';
import { db } from '../firebase';
import { ref, push, get, child, update } from 'firebase/database';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [countCart, setCountCart] = useState(0);
    const [addItem, setAddItem] = useState([]);
    const [stock,setStock]=useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            if (res.ok) {
                const data = await res.json();
                setProduct(data);
                setStock(data.stock); 
            } else {
                console.log('There has been an error fetching the data');
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const dbRef = ref(db);
                const snapshot = await get(child(dbRef, 'cartItems'));
                if (snapshot.exists()) {
                    const items = snapshot.val();
                    setAddItem(Object.values(items));
                    setCountCart(Object.keys(items).length);
                } else {
                    setAddItem([]);
                    setCountCart(0);
                }
            } catch (error) {
                console.error('Error fetching cart items: ', error);
            }
        };
        fetchCartItems();
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    const addItemsOnCart = async () => {
        try {
            
            if(stock>0){
                setStock((prevStock)=>prevStock-1)
                const newItemRef = push(ref(db, 'cartItems'));
                const newItemKey = newItemRef.key;
                const updates = {};
                updates['/cartItems/' + newItemKey] = { ...product, addedAt: new Date().toISOString() };
                await update(ref(db), updates);
                setAddItem((prevItems) => [...prevItems, product]);
                setCountCart((prevCount) => prevCount + 1);
            }else{
               <alert>This item is out of stock now!!</alert>
            }
           
            
        } catch (error) {
            console.error('Error adding item to cart: ', error);
        }
    };

    return (
        <div className='bg-white shadow-lg w-[60%] h-auto p-6 mx-auto mt-3'>
            <BreadCrumps />
            <div className='mt-2 flex justify-between'>
                <p className='font-bold text-s'>Rating: {product.rating}</p>
                <p className='font-bold text-2xl'>Price: ${product.price}</p>
                <span className='flex relative'>
                <Link to={'/cartItems'}>
                    <FaShoppingCart size={'50px'} color='orange' />
                    
                        <p className={`absolute top-0 right-0 mt-1 mr-1 ${countCart > 0 ? 'bg-blue-500' : 'bg-red-500'} text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
                            {countCart}
                        </p>
                    </Link>
                </span>
            </div>
            <div className='w-full flex h-1/2 justify-center items-center'>
                <img src={product.thumbnail} alt={product.title} className='w-[50%] h-[50%]' />
            </div>
            <hr className='my-4' />
            <div>
                <h1 className='text-3xl text-gray-600 font-bold'>{product.title}</h1>
                <p className='mt-2 text-xl text-gray-500'>{product.description}</p>
                <p className='mt-2 text-xl text-black-500'>Item in stock: {stock}</p>
                <Button className='justify-center items-center p-2 ml-[40%]' onClick={addItemsOnCart}>
                    <span className='italic font-bold text-[15px]'>Add Items to Cart</span>
                </Button>
            </div>
        </div>
    );
};

export default ProductDetails;
