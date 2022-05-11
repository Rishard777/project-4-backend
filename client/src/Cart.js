import ItemCard from "./ItemCard";

function Cart({ cart, setCart }) {
  const renderCart = cart.map((item) => {
    return <ItemCard item={item} key={item.id} setCart={setCart} />;
  });

  return (
    <div>
      <h2>Shopping Cart</h2>
      {renderCart}
    </div>
  );
}

export default Cart;
