import './shop-header.css';
import {NavLink} from "react-router-dom";
import {TfiShoppingCartFull} from 'react-icons/tfi'
import {useSelector} from "react-redux";

function ShopHeader () {
    const sumOfCart = useSelector(state => state.sumOfCart);

 return (
   <header className='shop-header-wrapper'>
       <div className='shop-header'>
           <NavLink to="/" className='shop-header-home menu-button'><span>Home</span></NavLink>
           <div className='shop-header-right-menu'>
               <div className='shop-header-search-container'>
                   <input className='shop-header-search'/>
               </div>
               <NavLink to="/cart" className='shop-header-cart menu-button'>
                   <TfiShoppingCartFull/>
                   <span>{sumOfCart}$</span>
               </NavLink>
           </div>
       </div>
   </header>
 )
}

export default ShopHeader;