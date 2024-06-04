import { useState } from 'react';

export default function FilterCategories({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, price });
  };

  return (
    <div className="p-10 bg-gray-100 mt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFilterChange();
        }}
        className="max-w-md mx-auto"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
              Apply Filters
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
