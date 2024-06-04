import { useEffect, useState } from 'react';
import FilterCategories from './FilterCategories';
import {Button} from 'flowbite-react'
import { Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumps';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products/`);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products); // Access the products array
        setFilteredProducts(data.products); // Initialize filtered products
      } else {
        console.log('You have no data to show');
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = () => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.price) {
      filtered = filtered.filter((product) => product.price <= filters.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col">
      <BreadCrumbs className='mx-auto mb-4'/>
      <div className="flex">
        <div className="w-1/5 h-[800px] p-4">
          <FilterCategories onFilterChange={setFilters} />
        </div>
        
        <div className="w-4/5 grid grid-cols-4 gap-4 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
                <div className="h-48 flex items-center justify-center overflow-hidden">
                  <img src={item.images[0]} alt={item.title} className="max-h-full" />
                </div>
                <div className="mt-2">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">Stock: {item.stock}</p>
                  <p className="text-sm text-gray-800">${item.price}</p>
                </div>
                <Link to={`/product/${item.id}`}><Button className='mt-2'> Details</Button></Link>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center  ">
              <p className="text-lg p-3 mt-20 border border-rounded-sm bg-red-300">No products available matching the filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
