import { useState } from "react";

function CommentPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((eachComment) => {
        return (
          <div key={eachComment.id}>
            {eachComment.id} {eachComment.text}
          </div>
        );
      })}
    </>
  );
}

export default CommentPage;
