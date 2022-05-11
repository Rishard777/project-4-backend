function itemCard({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <span>{item.price}</span>
      <img src={item.image} />
    </div>
  );
}

export default itemCard;
