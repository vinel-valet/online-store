import {data} from "../services/services";

export const fetchItemsId = async (id) => {
    try {
        const items = await data(), item = items.find(el => el.id == id);
        return item;
    } catch (error) {
        console.error('Ошибка:', error);
        return error;
    }
};

export const fetchItemId = ({params: {itemId}}) => fetchItemsId(itemId);