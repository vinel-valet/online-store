import './shop-header.css';
import {NavLink} from "react-router-dom";

function ShopHeader () {
 return (
   <header className='shop-header-wrapper'>
       <div className='shop-header'>
           <NavLink to="/" className='shop-header-home menu-button'><span>Home</span></NavLink>
           <div className='shop-header-right-menu'>
               <div className='shop-header-search-container'>
                   <input className='shop-header-search'/>
               </div>
               <NavLink to="/cart" className='shop-header-cart menu-button'><span>Cart</span></NavLink>
           </div>
       </div>
   </header>
 )
}

export default ShopHeader;