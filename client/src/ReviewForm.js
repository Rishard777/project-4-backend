import { useState } from "react";

function ReviewForm({ item }) {
  const [newReview, setNewReview] = useState("");

  function handleReviewSubmit(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: newReview,
        instrument_id: item.id,
        user_id: 1,
      }),
    };

    fetch("http://localhost:3000/reviews", config)
      .then((r) => r.json())
      .then((res) => console.log(res));
  }

  return (
    <form onSubmit={handleReviewSubmit} className="revForm">
      <input
        className="searchbar input"
        type="text"
        placeholder="leave a review"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      ></input>

      <button className="searchBtn searchbar">Submit</button>
    </form>
  );
}

export default ReviewForm;
