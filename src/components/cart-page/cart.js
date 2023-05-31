import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

function CartPage() {
    const items = useSelector((state) => state.items);
    const {deleteAllItems} = useActions()

    if (items.length) {
        const arrItems = items.map((item, index)=> {
            return <div key={index}>{item.title} : {item.price}</div>
        })
        return (
            <>
                {arrItems}
                <button onClick={()=>deleteAllItems()}>All Delete</button>
            </>
        )
    } else {
        return <div>Hello</div>
    }
}

export default CartPage;