import "./Home.css";
import { useState, useEffect } from "react";
import itemCard from "./itemCard";

function Home() {
  const [items, setItems] = useState({});

  //   useEffect(() => {
  //     fetch("localhost:3000/items")
  //       .then((res) => res.json())
  //       .then((data) => setItems(data));
  //   }, []);

  //   const renderItems = items.map((item) => {
  //     return <itemCard item={item} />;
  //   });

  return (
    <div className="wrapper">
      <div className="carousel">carousel here</div>

      <div className="itemsWrapper">
        <h2>All Items</h2>
        <div className="big">{/* {renderItem} */}</div>
      </div>
    </div>
  );
}

export default Home;
