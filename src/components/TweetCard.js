import React from 'react';

const TweetCard = ({ tweet }) => {
  return (
    <div className="p-5">
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src={tweet.avatar}
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <a href="#">{tweet.username}</a>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
            </div>
          </div>
        </div>
        {tweet.userId === 1 && (
          <div>
            <button
              type="button"
              className="inline-flex items-center w-15 px-2.5 mx-2 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Delete
            </button>
            <button
              type="button"
              className="inline-flex items-center w-15 px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <p className="mt-3 text-base leading-6 text-gray-500">{tweet.message}</p>
    </div>
  );
};

export default TweetCard;
