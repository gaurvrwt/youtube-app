import React,{useState,useEffect} from "react";
import CommentsList from "./Comment";
import { YOUTUBE_VIDEO_COMMENTS } from "../Utils/Config";


const CommentsContainer = ({videoId}) => {

  const [commentsData,setCommentsData] = useState();
  
  useEffect(()=>{

    getCommentsData();
  },[]);
  console.log('workeed')

  const getCommentsData = async() =>{
    console.log('workeed')
    const comments = await fetch(YOUTUBE_VIDEO_COMMENTS + videoId);
    const parsedComments =  await comments.json();
    setCommentsData(parsedComments.items)
    console.log(parsedComments,'All comments');
  }
  return (
    <div className="ml-4 p-4 font-bold">
      <h2>Comments</h2>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
