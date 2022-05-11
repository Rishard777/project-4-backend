import "./ItemCard.css";
import { useState } from "react";

function ItemCard({ item, setCart }) {
  const [selected, setSelected] = useState(false);
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
    <div
      // onClick={() => setSelected(!selected)}
      className={selected ? "itemWrapper selected" : "itemWrapper"}
    >
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div className="imgWrapper">
        <img className="itemImg" src={item.image} alt={item.name} />
      </div>
      <button onClick={handleAddToCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ItemCard;
