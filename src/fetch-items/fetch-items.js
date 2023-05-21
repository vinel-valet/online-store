import ShopItem from "../components/shop-item/shop-item";
import { data } from "../services/services";

export const fetchItems = async () => {
    try {
        let items = await data();
        let itemsArr = items.map((item) => <ShopItem paramsItem={item} />);

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