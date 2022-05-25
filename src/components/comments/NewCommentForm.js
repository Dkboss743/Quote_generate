import { useRef } from "react";

import classes from "./NewCommentForm.module.css";
import { commentAction } from "../store/comments";
import { useDispatch } from "react-redux";
const NewCommentForm = (props) => {
  const dispatch = useDispatch((state) => state.comments);

  const commentTextRef = useRef();

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
    props.isAdding(false);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
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
