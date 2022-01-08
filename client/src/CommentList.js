import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(({ id, content, status }) => {
          let comment;
          if (status === "approved") {
            comment = content;
          }
          if (status === "pending") {
            comment = "Comment pending review";
          }
          if (status === "rejected") {
            comment = "Comment rejected";
          }
          return <li key={id}>{comment}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
