import React from 'react';

const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Art', 'Photography', 'Writing', 'Other'];

  return (
<<<<<<< HEAD
    <div className="flex justify-center flex-wrap gap-2 sm:gap-4 my-8">
      {categories.map((category) => {
        const categoryValue = category === 'All' ? '' : category; // API expects empty string for 'All'
=======
    <div className="flex justify-center space-x-2 sm:space-x-4 my-8">
      {categories.map((category) => {
        const isAllCategory = category === 'All';
        const categoryValue = isAllCategory ? '' : category; // API expects empty string for 'All'
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190

        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(categoryValue)}
<<<<<<< HEAD
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
              selectedCategory === categoryValue
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
=======
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              selectedCategory === categoryValue
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
>>>>>>> 60e62a399ff357f7e26e5eb8476c57f0e044d190
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;