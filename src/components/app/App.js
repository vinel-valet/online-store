import {Outlet} from "react-router-dom"
import ShopHeader from "../shop-header/shop-header";
import './App.css'

function App () {
    return (
        <div>
            <ShopHeader/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default App;