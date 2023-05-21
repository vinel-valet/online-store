import './shop-item-page.css'
import {useLoaderData} from "react-router-dom"

function ShopItemPage () {
    const {title, price, images, description} = useLoaderData()
    return (
        <div>
            <div className='shop-item-wrapper'>
                <div className='item-page-img-container'>
                    <img src={images} className='item-page-img'/>
                </div>
                <div className="item-page-content">
                    <h3 className='shop-item-name'>Name: {title} </h3>
                    <p>Description: {description} </p>
                    <p>Price: {price} </p>
                    <div className='shop-item-button-container'>
                        <button className='shop-item-button-add'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItemPage;