import React from 'react';

const Menu = ({items}) => {

console.log(items,"item")
  return <main className='section-center'>

    {items.map((menuItem)=>{
      const {id,img,desc,title,price}=menuItem
      return <article key={id} className="menu-item">
        <img src={img} alt={title} className="photo"/>
        <div className="item-info">
          <header>
          <h4>{title}</h4>
          <h4 className='price'>${price}</h4>
          
          </header>
          <p className='item-text'>{desc}</p>
        </div>
        
      </article>
    })}
   
  </main>
};

export default Menu;
