import './shop-list.css';
import { NavLink, useLoaderData } from 'react-router-dom';

function ShopListPage() {
    const itemsList: any = useLoaderData();

    const allItems = itemsList.items.map((item: any) => (
        <NavLink key={item.props.paramsItem.id} className='item-cart' to={'/item/' + item.props.paramsItem.id}>
            {item}
        </NavLink>
    ));

    return <div className='shop-list-container'>{allItems}</div>;
}

export default ShopListPage;