import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {BsPatchPlusFill, BsFillPatchMinusFill} from 'react-icons/bs'
import "./cart.css"

function CartPage() {
    const items = useSelector((state) => state.items);
    const {deleteAllItems, incrementItem, decrementItem} = useActions()

    if (items.length) {
        const arrItems = items.map((item, index)=> {
            return (
                <div className="cart-page-item" key={index}>
                    <div>{item.title}</div>
                    <div className="cart-page-quantity">
                        <BsFillPatchMinusFill onClick={()=>decrementItem(item)}/>
                        {item.quantity}
                        <BsPatchPlusFill onClick={()=>incrementItem(item)}/>
                    </div>
                    <div>{item.allPrice}$</div>
                </div>)
        })
        return (
            <div className="cart-page-container">
                {arrItems}
                <button className="shop-item-button-add" onClick={()=>deleteAllItems()}>All Delete</button>
            </div>
        )
    } else {
        return <div>Hello</div>
    }
}

export default CartPage;