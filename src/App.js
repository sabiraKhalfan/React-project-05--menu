import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



const allcategories =['all',...new Set(items.map((item)=>
item.category))] 
  
  console.log(allcategories)


function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState([allcategories])

   const filterItems=(category)=>{
    const newItems= items.filter((item)=>
      item.category===category);
      setMenuItems(newItems)
    
   }
  
  return <main>
    <section className='menu section'>
       <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu  items={menuItems} key={items.id}/>
    </section>
  
  </main>;
}

export default App;
