import './error-page.css';
import {NavLink, useRouteError} from 'react-router-dom';
import ShopHeader from "../shop-header/shop-header";

function ErrorPage() {
    const error = useRouteError()
    console.log(error.data)
    return (
        <div>
            <ShopHeader/>
            <div className='error-container'>
                <h3>Hello, this page doesn't exist or something went wrong.</h3>
                <h3>Please click <NavLink to='/'>here</NavLink> or go back one page</h3>
                <img src={require("../../img/hasb.jpg")} className='error-img'/>
                {console.log(error.message ?? error.statusText)}
            </div>
        </div>
    )
}

export default ErrorPage;