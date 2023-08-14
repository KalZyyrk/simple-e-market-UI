import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {
    const selector = useSelector(state => state);
    const cartProducts = selector.cartProducts

    return (
        <header id="header">
            <NavLink to="/products">
                <img className="siteLogo" src="https://img.icons8.com/bubbles/344/mac-os.png"/>
            </NavLink>

            <form className="search">
                <input type="text" placeholder="search"/>
                <button>Accept</button>
            </form>

            <div className="cartLink">
                <img src="https://img.icons8.com/bubbles/344/shopping-cart.png"/>
                <NavLink to="/cart">Cart</NavLink>
                <span>{cartProducts.length}</span>
            </div>
        </header>
    )
}