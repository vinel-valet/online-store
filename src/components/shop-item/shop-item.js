import './shop-item.css'
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";

function ShopItem ({paramsItem}) {
    const items = useSelector((state) => state.items);
    const {addItem} = useActions()
    let item = items.find((item)=> item.id === paramsItem.id);


    const addItemToCart = (e) => {
        e.preventDefault();
        addItem(paramsItem);
    };

    const buttonAdd = <button onClick={addItemToCart} className='shop-item-button-add'>Add to cart</button>;
    const buttonDone = <button onClick={(e)=>e.preventDefault()} className='shop-item-button-add button-done'>Done, Thanks</button>;


    return (
        <div className='shop-item-container'>
            <div className='shop-item-img-container'>
                <img src={paramsItem.images} className='shop-item-img'/>
            </div>
            <div className='shop-item-content'>
                <h3 className='shop-item-name'>Name: {paramsItem.title} </h3>
                <p className='shop-item-cost'>Price: {paramsItem.price} </p>
                <div className='shop-item-button-container'>
                    {!item ? buttonAdd: buttonDone}
                </div>
            </div>
        </div>
    )
}

export default ShopItem;