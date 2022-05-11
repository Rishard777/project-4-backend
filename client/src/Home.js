import "./Home.css";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instruments")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const renderItems = items.map((item) => {
    return <ItemCard key={item.id} item={item} />;
  });

  return (
    <div className="wrapper">
      <div className="carousel">carousel here</div>

      <h2>All Items</h2>
      <div className="itemsWrapper">{renderItems}</div>
    </div>
  );
}

export default Home;
