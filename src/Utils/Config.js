const GOOGLE_API_KEY = "AIzaSyBCxHaQ8YXX7y_G-1nFUcEI7kHk3bHCQk4";
export const YOUTUBE_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SUGGESTIONS_API =
  "https://clients1.google.com/complete/search?client=youtube&h1=en&ds=yt&q=";
export const YOUTUBE_VIDEO_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=" + 
  GOOGLE_API_KEY +
  "&q=";
  
  

  export const YOUTUBE_VIDEO_COMMENTS = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=' + GOOGLE_API_KEY + '&videoId=';
