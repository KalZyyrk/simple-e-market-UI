import {useDispatch, useSelector} from "react-redux";

export default function Cart() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const cartProducts = selector.cartProducts;

    function removeProduct(id) {
        dispatch({type: "REMOVE_FROM_CART", payload: id})
    }

    function incrementProduct(id) {
        dispatch({type: "INCREMENT_PRODUCT", payload: {id, increment: 1}})
    }

    function decrementProduct(id, inCart) {
        inCart <= 1 ? removeProduct(id) : dispatch({type: "DECREMENT_PRODUCT", payload: {id, decrement: 1}})
    }

    return (
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item =>
                <div className="cartItem">
                    <div className="cartItemImg">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="cartItemInfo">
                        <h3>{item.name}</h3>
                        <span>Color: {item.color}</span>
                    </div>
                    <div className="cartItemQuantity">
                        <button onClick={() => incrementProduct(item.id)}>+</button>
                        <span>{item.inCart}</span>
                        <button onClick={() => decrementProduct(item.id, item.inCart)}>-</button>
                    </div>
                    <div className="cartItemPrice">
                        <h3>{item.price}$</h3>
                        <span>Total: {item.price * item.inCart}</span>
                    </div>
                    <div className="removeCartItem">
                        <button onClick={() => {removeProduct(item.id)}}>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png"/>
                        </button>
                    </div>
                </div>
            ) : <h2>CartIsEmpty</h2>}
        </div>
    )
}