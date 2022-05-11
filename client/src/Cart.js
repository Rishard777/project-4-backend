import ItemCard from "./ItemCard";
import "./Cart.css";

function Cart({ cart, setCart }) {
  const renderCart = cart.map((item) => {
    return <ItemCard item={item} key={item.id} setCart={setCart} />;
  });

  const subtotal = cart
    .map((item) => item.price)
    .reduce((total, current) => total + current, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cartWrapper">
        <div className="itemsWrapper">{renderCart}</div>
        <div className="cartStats">
          <p>Number of items in cart: {cart.length}</p>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
