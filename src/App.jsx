import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
