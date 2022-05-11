import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="itemWrapper">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <div className="imgWrapper">
        <img className="itemImg" src={item.image} alt={item.name} />
      </div>
    </div>
  );
}

export default ItemCard;
