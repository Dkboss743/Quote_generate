import { useRef, useEffect } from "react";

import classes from "./NewCommentForm.module.css";
import { commentAction } from "../store/comments";
import { useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const { onAddedComment } = props;
  const dispatch = useDispatch((state) => state.comments);
  const { sendRequest, status, error } = useHttp(addComment);

  const commentTextRef = useRef();
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const quoteId = props.id;
  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(
      commentAction.addAComment({
        id: props.id.toString(),
        comment: {
          id: 100 * Math.random(),
          text: commentTextRef.current.value,
        },
      })
    );
    const enteredText = commentTextRef.current.value;
    sendRequest({
      text: enteredText,
      quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
