import "./Home.css";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Home({ setCart, searchTerm }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instruments")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const renderItems = items
    .filter((item) =>
      item.name.toUpperCase().includes(searchTerm.toUpperCase())
    )
    .map((item) => {
      return <ItemCard key={item.id} item={item} setCart={setCart} />;
    });

  return (
    <div className="wrapper">
      <h2>All Items</h2>
      <div className="itemsWrapper">{renderItems}</div>
    </div>
  );
}

export default Home;
