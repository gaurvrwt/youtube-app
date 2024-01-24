import React from "react";
import moment from "moment";

const Comment = ({ comment }) => {
  const {textDisplay, authorProfileImageUrl, authorDisplayName,publishedAt} = comment;
    return (
    <div className="pl-2 p-3 bg-gray-50 rounded-lg flex gap-2">
      <div>
      <img src={authorProfileImageUrl} alt='user profile image' />
      </div>
      <span>
      <p>{authorDisplayName} {moment.utc(publishedAt).fromNow()}</p>
      <p>{textDisplay}</p>
      </span>
    </div>
  );
};

const CommentsList = ({ data }) => {
  console.log(data,'data')
  return (
    <div>
      {data?.map((val, i) => (
        <div key={i}>
          <Comment comment={val.snippet.topLevelComment.snippet} />
          <div className="pl-4 border-l-black">
            <CommentsList data={val.reply} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
