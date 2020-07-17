import React from "react";
import TweetList from "./TweetList";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden md:flex md:flex-shrink-0">
        <SideBar></SideBar>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <div className="pt-2 pb-6 md:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Gossip Girl
              </h1>
            </div>
            <TweetList></TweetList>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
