import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetEditor from './TweetEditor';
import TweetList from './TweetList';

const TimeLine = () => {
  const [tweets, setTweets] = useState([]);
  const getData = async () => {
    const response = await axios.get('/api/tweets');
    setTweets(response.data);
  };

  const sendGossip = async (gossip) => {
    const response = await axios.post('/api/tweets', {
      message: gossip,
    });

    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-2 pb-6 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Gossip Girl</h1>
      </div>
      <div className="px-8">
        <TweetEditor sendGossip={sendGossip}></TweetEditor>
      </div>
      <TweetList tweets={tweets}></TweetList>
    </div>
  );
};

export default TimeLine;
