import React from "react";
// import Comment from "./Comment";
import CommentsList from "./Comment";

const commentsData = [
  {
    name: "Mohit",
    text: "This band is so crazy and I don't even remember how I came across them. I love listening to them when I'm creating",
    reply: [
      {
        name: "Mohit",
        text: "This band is so crazy and I don't even remember how I came across them. I love listening to them when I'm creating",
        reply: [
          {
            name: "Mohit",
            text: "This band is so crazy and I don't even remember how I came across them. I love listening to them when I'm creating",
            reply: [
              {
                name: "Mohit",
                text: "This band is so crazy and I don't even remember how I came across them. I love listening to them when I'm creating",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="ml-4 p-4 font-bold">
      <h2>Comments</h2>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
