import React from 'react';
import TweetCard from './TweetCard';

const TweetList = ({ tweets }) => {
  const renderTweets = () => {
    return tweets.map((tweet) => (
      <div key={tweet.id} className="border-b border-gray-200">
        <TweetCard tweet={tweet}></TweetCard>
      </div>
    ));
  };

  return <div>{renderTweets()}</div>;
};

export default TweetList;
