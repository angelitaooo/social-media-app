import React from 'react';

const TweetEditor = () => {
  return (
    <div>
      <div className="flex justify-between">
        <label
          for="how_can_we_help"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          What's new?
        </label>
        <span className="text-sm leading-5 text-gray-500">
          Max. 100 characters
        </span>
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          id="how_can_we_help"
          rows="4"
          className="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        ></textarea>
      </div>
      <div class="text-right sm:col-span-2 mt-4">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Send gossip
          </button>
        </span>
      </div>
    </div>
  );
};

export default TweetEditor;
