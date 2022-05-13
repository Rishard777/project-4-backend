import Review from "./Review";

function Reviews({ reviews }) {
  const renderReviews = reviews.map((review) => {
    return <Review review={review} />;
  });

  return <ul>{renderReviews}</ul>;
}

export default Reviews;
