import ShopItem from "../shop-item/shop-item";
import {data} from "../../services/services";

export const fetchItems = () => {
    let items = data()
    let itemsArr = [<ShopItem paramsItem={items[0]}/>, <ShopItem paramsItem={items[1]}/>];

    return {
        items: itemsArr
    };
}
