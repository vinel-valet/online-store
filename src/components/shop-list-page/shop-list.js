import './shop-list.css'
import {NavLink, useLoaderData} from "react-router-dom";

function ShopListPage() {
    const itemsList = useLoaderData();
    let items = itemsList.items.map((item, index) => {
        return (
            <NavLink key={index} className='item-cart' to={'/item/' + (item.props.paramsItem.id)}>
                {item}
            </NavLink>
        );
    });

    return <div className='shop-list-container'>{items}</div>;
}

export default ShopListPage;