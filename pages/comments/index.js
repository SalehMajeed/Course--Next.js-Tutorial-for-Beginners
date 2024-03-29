import { useState } from "react";

function CommentPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    fetchComments();
  };
  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    fetchComments();
  };
  return (
    <>
      <input
        type={"text"}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((eachComment) => {
        return (
          <div key={eachComment.id}>
            {eachComment.id} {eachComment.text}
            <button onClick={() => deleteComment(eachComment.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CommentPage;
