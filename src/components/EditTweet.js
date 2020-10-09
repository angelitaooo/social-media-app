import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import TweetEditor from './TweetEditor';

const EditTweet = () => {
  const { tweetId } = useParams();
  const history = useHistory();

  const editTweet = async (gossip) => {
    const response = await axios.put(`/api/tweets/${tweetId}`, {
      message: gossip,
    });
    history.push('/');
    console.log('response', response);
  };

  return (
    <div className="px-8">
      <h2 className="text-2xl pb-5">Edit GOSSIP</h2>
      <TweetEditor sendGossip={editTweet}></TweetEditor>
    </div>
  );
};

export default EditTweet;
