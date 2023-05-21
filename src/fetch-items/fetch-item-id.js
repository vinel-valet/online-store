import {data} from "../services/services";

export const fetchItemsId = async (id) => {
    try {
        let items = await data();
        let item = items.find(el => el.id == id);
        return item;
    } catch (error) {
        console.error('Ошибка:', error);
        return error;
    }
}

export const fetchItemId = ({params: {itemId}}) => fetchItemsId(itemId);