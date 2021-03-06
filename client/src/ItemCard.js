import "./ItemCard.css";
import { useState, useEffect } from "react";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function ItemCard({ item, setCart }) {
  const [showInfo, setShowInfo] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instruments/" + item.id)
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews));
  });

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
      <div>
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

      {showInfo ? (
        <div className="reviewWrapper">
          <Reviews reviews={reviews} />
          <ReviewForm item={item} />
        </div>
      ) : null}
    </div>
  );
}

export default ItemCard;
