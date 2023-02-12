import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("redux data in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
