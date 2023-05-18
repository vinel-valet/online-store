import './shop-header.css';

function ShopHeader () {
 return (
   <header className='shop-header-wrapper'>
       <div className='shop-header'>
           <div className='shop-header-home menu-button'><span>Home</span></div>
           <div className='shop-header-right-menu'>
               <div className='shop-header-search-container'>
                   <input className='shop-header-search'/>
               </div>
               <div className='shop-header-cart menu-button'><span>Cart</span></div>
           </div>
       </div>
   </header>
 )
}

export default ShopHeader;