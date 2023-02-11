import logo from './logo.svg';
import './App.css';
import {addToCart} from './redux/actions'
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const product={
    name:'IPhone',
    type:'Mobile',
    price:'10000',
    color:'Red'
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
