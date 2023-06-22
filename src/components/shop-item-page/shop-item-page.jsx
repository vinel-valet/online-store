import './shop-item-page.css'
import {useLoaderData} from "react-router-dom"
import {useActions} from "../../hooks/useActions";
import {useSelector} from "react-redux";

function ShopItemPage () {
    const stateItems = useSelector((state) => state.items);
    const {addItem} = useActions();
    const item = useLoaderData();
    const itemFind = stateItems.find((thisItem)=> thisItem.id === item.id);


    return (
        <div>
            <div className='shop-item-wrapper'>
                <div className='item-page-img-container'>
                    <img src={item.images} className='item-page-img'/>
                </div>
                <div className="item-page-content">
                    <h3 className='shop-item-name'>Name: {item.title} </h3>
                    <p>Description: {item.description} </p>
                    <p>Price: {item.price} </p>
                    <div className='shop-item-button-container'>
                        {!itemFind ?
                            <button onClick={()=> addItem(item)} className='shop-item-button-add'>Add to cart</button> :
                            <button onClick={(e)=>e.preventDefault()} className='shop-item-button-add button-done'>Done, Thanks</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItemPage;