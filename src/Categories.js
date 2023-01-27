import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return <main className='btn-container'>
    {categories.map((category,index) => {
      return (
        <button
        className='filter-btn'
        type='button'
        key={index}
        onClick={() => filterItems(category)}
        >
        {category}
      </button>
      )

    })}

  </main>
};

export default Categories;
