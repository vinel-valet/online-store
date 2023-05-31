import './shop-item-page.css'
import {useLoaderData} from "react-router-dom"
import {useActions} from "../../hooks/useActions";

function ShopItemPage () {
    const {addItem} = useActions();
    const item = useLoaderData()
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
                        <button onClick={()=> addItem(item)} className='shop-item-button-add'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItemPage;