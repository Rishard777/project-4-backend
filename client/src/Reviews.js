function Reviews({ reviews }) {
  const renderReviews = reviews.map((review) => {
    return <span key={review.id}>"{review.description}"</span>;
  });

  return renderReviews;
}

export default Reviews;
