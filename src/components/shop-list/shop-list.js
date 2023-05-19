import './shop-list.css'
import ShopItem from "../shop-item/shop-item";
import {NavLink} from "react-router-dom";

function ShopList () {
  return (
      <div className='shop-list-container'>
          <NavLink className='item-cart' to='/:itemId'><ShopItem/></NavLink>
      </div>
  )
}

export default ShopList;