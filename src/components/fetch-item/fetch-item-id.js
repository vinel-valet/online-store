import {data} from "../../services/services";

export const fetchItemIdel = (id) => {
    let item = data().find(el => el.id == id);

    return item
}

export const fetchItemId = ({params: {itemId}}) =>
    fetchItemIdel(itemId);