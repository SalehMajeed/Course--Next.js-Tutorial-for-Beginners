import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (eachComment) => eachComment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    let index = null;
    const deletedComment = comments.find((eachComment, indexNumber) => {
      if (eachComment.id === parseInt(commentId)) {
        index = indexNumber;
        return eachComment;
      }
    });
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
