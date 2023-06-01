import './shop-item.css'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

function ShopItem ({paramsItem}) {
    const items = useSelector((state) => state.items);
    const {addItem} = useActions()

    let item = items.find((item)=> item.id === paramsItem.id)
    const addItemToCart = (e) => {
        e.preventDefault();
        addItem(paramsItem)
    };

    let button = <button onClick={addItemToCart} className='shop-item-button-add'>Add to cart</button>;
    let button2 = <div className='shop-item-button-add'>Go to cart</div>;

    return (
        <div className='shop-item-container'>
            <div className='shop-item-img-container'>
                <img src={paramsItem.images} className='shop-item-img'/>
            </div>
            <div className='shop-item-content'>
                <h3 className='shop-item-name'>Name: {paramsItem.title} </h3>
                <p className='shop-item-cost'>Price: {paramsItem.price} </p>
                <div className='shop-item-button-container'>
                    {item? button2 : button}
                </div>
            </div>
        </div>
    )
}

export default ShopItem;