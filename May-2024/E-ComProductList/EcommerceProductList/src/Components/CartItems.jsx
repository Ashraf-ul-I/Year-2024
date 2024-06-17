import React, { useEffect, useState } from 'react';
import { ref, onValue, remove, off, update } from 'firebase/database';
import { db } from '../firebase';
import { Link, useParams } from 'react-router-dom';

const CartItems = () => {
  const [data, setData] = useState(null);
  const {id}=useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartItemsRef = ref(db, 'cartItems');
        onValue(cartItemsRef, (snapshot) => {
          const fetchedItems = snapshot.val();
          console.log('Fetched items:', fetchedItems);  // Debug log
          setData(fetchedItems);
        });
      } catch (error) {
        console.error('Error fetching data:', error);  // Error handling
      }
    };
    fetchData();

    // Cleanup subscriptions on unmount
    return () => {
      off(ref(db, 'cartItems'));
    };
  }, []);

  const handleDelete = async (itemId) => {
    try {
      await remove(ref(db, `cartItems/${itemId}`));
      console.log(`Item ${itemId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Combine items with the same id and count their quantities
  const getCombinedItems = (items) => {
    const combinedItems = {};
    for (const [key, item] of Object.entries(items)) {
      if (combinedItems[item.id]) {
        combinedItems[item.id].quantity += 1;
      } else {
        combinedItems[item.id] = { ...item, quantity: 1, dbKey: key };
      }
    }
    return Object.values(combinedItems);
  };

  const combinedItems = data ? getCombinedItems(data) : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Cart Items</h1>
      {combinedItems.length > 0 ? (
        combinedItems.map((item) => (
          <div key={item.dbKey} className="flex items-center ml-[10%] justify-between bg-white shadow-lg p-4 mb-2 w-[80%] h-[200px]">
           <Link to={`/product/${item.id}`}> <img src={item.thumbnail} alt={item.title} className="h-[170px] object-cover" /></Link>
            <div className="flex-grow ml-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.price * item.quantity}</p>
            </div>
            <button 
              onClick={() => handleDelete(item.dbKey)} 
              className="text-red-500 hover:text-red-700 font-bold mr-[10%] text-xl"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading cart items...</p>
      )}
    </div>
  );
};

export default CartItems;
