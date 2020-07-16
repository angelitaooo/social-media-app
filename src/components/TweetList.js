import React, { useState, useEffect } from "react";
import axios from "axios";
import TweetCard from "./TweetCard";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const getData = async () => {
    const response = await axios.get("/api/tweets");    
    setTweets(response.data.tweets);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderTweets = () => {
    return tweets.map(tweet => <div className="border-b border-gray-200"><TweetCard key={tweet.id} tweet={tweet}></TweetCard></div>)
  }
  
  return (
    <div>
      { renderTweets() }  
    </div>
  );
};

export default TweetList;
