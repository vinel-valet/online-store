import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {BsPatchPlusFill, BsFillPatchMinusFill, BsFillTrash3Fill} from 'react-icons/bs'
import "./cart.css"

function CartPage() {
    const items = useSelector((state) => state.items);
    const {deleteAllItems, incrementItem, decrementItem, deleteItem} = useActions()

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
                    <div className="cart-page-price-and-trash">
                        {item.allPrice}$
                        <span>
                            <BsFillTrash3Fill onClick={()=> deleteItem(item)}/>
                        </span>
                    </div>
                </div>)
        })
        return (
            <div className="cart-page-container">
                {arrItems}
                <button className="shop-item-button-add" onClick={()=>deleteAllItems()}>All Delete</button>
            </div>
        )
    } else {
        return <div className="cart-page-container">There is nothing here yet</div>
    }
}

export default CartPage;