function Reviews({ reviews }) {
  const renderReviews = reviews.map((review) => {
    function handleDelete() {
      fetch("http://localhost:3000/reviews/" + review.id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    }

    return (
      <li key={review.id}>
        "{review.description}"<button onClick={handleDelete}>X</button>
      </li>
    );
  });

  return <ul>{renderReviews}</ul>;
}

export default Reviews;
