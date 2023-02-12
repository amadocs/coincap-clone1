import { addToCart, emptyCart } from "../redux/actions";
import { removeFromCart } from "../redux/actions";
import { useDispatch } from "react-redux";
function Main() {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default Main;
