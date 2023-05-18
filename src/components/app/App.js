import {Outlet} from "react-router-dom"
import ShopHeader from "../shop-header/shop-header";

function App () {
    return (
        <div>
            <ShopHeader/>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default App;