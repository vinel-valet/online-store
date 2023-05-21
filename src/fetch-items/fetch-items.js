import ShopItem from "../components/shop-item/shop-item";
import { data } from "../services/services";

export const fetchItems = async () => {
    try {
        let items = await data();
        let itemsArr = [
            <ShopItem paramsItem={items[0]} />,
            <ShopItem paramsItem={items[1]} />
        ];

        return {
            items: itemsArr
        };
    } catch (error) {
        console.error('Ошибка:', error);
        return {
            items: []
        };
    }
}