import "./ItemCard.css";
import { useState } from "react";

function ItemCard({ item, setCart }) {
  const [showInfo, setShowInfo] = useState(false);
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    if (inCart) {
      setCart((prevState) => prevState.filter((cartItem) => cartItem !== item));

      setInCart(false);
    } else {
      setCart((prevState) => [...prevState, item]);
      setInCart(true);
    }
  }

  return (
    <div className={showInfo ? "itemWrapper showInfo" : "itemWrapper"}>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="imgWrapper">
        <img className="itemImg" src={item.image} alt={item.name} />
      </div>
      <button
        className={inCart ? "cartBtn added" : "cartBtn"}
        onClick={handleAddToCart}
      >
        {inCart ? "-" : "+"}
      </button>

      <button
        className={showInfo ? "cartBtn added infoBtn" : "cartBtn infoBtn"}
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? "<" : ">"}
      </button>
    </div>
  );
}

export default ItemCard;
