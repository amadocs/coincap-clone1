import { addToCart, removeFromCart, emptyCart } from "../redux/actions";
import { productList } from "../redux/productAction"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("Data in main component", data)
  const product = {
    name: "IPhone",
    type: "Mobile",
    price: "10000",
    color: "Red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Get Product List</button>
    </div>
  );
}

export default Main;
