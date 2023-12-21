import React from "react";

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="pl-2 p-3 bg-gray-50 rounded-lg flex gap-2">
      <p>{name}:</p>
      <p>{text}</p>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return (
    <div>
      {data?.map((val, i) => (
        <div key={i}>
          <Comment comment={val} />
          <div className="pl-4 border-l-black">
            <CommentsList data={val.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
