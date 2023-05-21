import './shop-item.css'

function ShopItem ({paramsItem}) {

    const handleChildClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className='shop-item-container'>
            <div className='shop-item-img-container'>
                <img src={paramsItem.images} className='shop-item-img'/>
            </div>
            <div className='shop-item-content'>
                <h3 className='shop-item-name'>Name: {paramsItem.title} </h3>
                <p className='shop-item-cost'>Price: {paramsItem.price} </p>
                <div className='shop-item-button-container'>
                    <button onClick={handleChildClick} className='shop-item-button-add'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ShopItem;