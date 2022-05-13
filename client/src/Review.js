import { useState } from "react";

function Review({ review }) {
  const [edit, setEdit] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  function handleDelete() {
    fetch("http://localhost:3000/reviews/" + review.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/reviews/" + review.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: edit, id: review.id }),
    })
      .then((r) => r.json())
      .then((r) => setShowEdit(false));
  }
  return (
    <li key={review.id}>
      "{review.description}"<button onClick={handleDelete}>X</button>
      {showEdit ? (
        <form onSubmit={handleEdit}>
          <input value={edit} onChange={(e) => setEdit(e.target.value)} />
          <button>edit review</button>
        </form>
      ) : (
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      )}
    </li>
  );
}

export default Review;
