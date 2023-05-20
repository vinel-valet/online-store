import './shop-item-page.css'
import {useLoaderData} from "react-router-dom"

function ShopItemPage () {
    const {name, cost} = useLoaderData()
    return (
        <div>
            <div className='shop-item-content'>
                <h3 className='shop-item-name'>Name: {name} </h3>
                <p className='shop-item-cost'>Cost: {cost} </p>
                <div className='shop-item-button-container'>
                    <button className='shop-item-button-add'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShopItemPage;