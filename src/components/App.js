import React from 'react';
import SideBar from './SideBar';
import TimeLine from './TimeLine';

const App = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden md:flex md:flex-shrink-0">
        <SideBar></SideBar>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <TimeLine></TimeLine>
        </main>
      </div>
    </div>
  );
};

export default App;
