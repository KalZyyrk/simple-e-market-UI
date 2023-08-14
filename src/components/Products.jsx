import {useDispatch, useSelector} from "react-redux";

export default function Products() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const products = selector.products;
    const cartProduct = selector.cartProducts;

    function addToCart(id) {
        let isInCart = false;
        cartProduct.forEach(el => {
            if (id === el.id) isInCart = true;
        })

        if (!isInCart) {
            dispatch({type: "ADD_TO_CART", payload: products.find((product) => product.id === id)})
        }
        alert("Product added to Cart")
    }

    return (
        <div className="productsList">
            {products.map(item =>
               <div className="product" key={item.id}>
                   <img src={item.image} alt=""/>
                   <h3>{item.name}</h3>
                   <span>Color: {item.color}</span>

                   <div className="priceBlock">
                       <span className="productPrice">{item.price}$</span>
                       <button onClick={() => addToCart(item.id)}>BUY</button>
                   </div>
               </div>
            )}
        </div>
    )
}