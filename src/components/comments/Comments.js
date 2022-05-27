import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const params = useParams();

  const id = params.quoteId;
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(id);
  }, [id, sendRequest, isAddingComment]);

  const addedCommentHandler = () => {
    setIsAddingComment(false);
  };
  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (status === "completed" && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments}></CommentsList>;
  }
  if (status === "completed" && loadedComments.length === 0) {
    comments = <p className="centered">No Comments were added Yet</p>;
  }
  return (
    <section className={classes.comments}>
      <h2 className="centered">User Comments</h2>
      {!isAddingComment && (
        <button className="btn centered" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm id={id} onAddedComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
