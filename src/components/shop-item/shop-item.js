import './shop-item.css'

function ShopItem () {

    return (
        <div className='shop-item-container'>
            <div className='shop-item-img-container'>
                <img src={require("../../img/tycho-dive-art.jpg")} className='shop-item-img'/>
            </div>
            <div className='shop-item-content'>
                <h3 className='shop-item-name'>Name: </h3>
                <p className='shop-item-cost'>Cost: </p>
                <div className='shop-item-button-container'>
                    <button className='shop-item-button-add'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;