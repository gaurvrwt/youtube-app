import React from "react";

const Comment = ({ comment }) => {
  const { name, text } = comment;
  //   console.log(data, "mnt");
  return (
    <div className="pl-2 p-3 bg-gray-50 rounded-lg flex gap-2">
      <p>{name}:</p>
      <p>{text}</p>
    </div>
  );
};

const CommentsList = ({ data }) => {
  console.log(data, "data");
  return (
    <div>
      {data?.map((val, i) => (
        <div>
          <Comment key={i} comment={val} />
          <div className="pl-4 border-l-black">
            <CommentsList data={val.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
