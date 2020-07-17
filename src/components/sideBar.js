import React from "react";

const SideBar = () => {
    return (
        <div className="flex flex-col w-64 bg-gray-800">
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 pt-4">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-white">
                  Tom Cook
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  View profile
                </p>
              </div>
            </div>
            <div>
              <p className="pt-6 px-4 text-white">
                this is the profile description his is the profile description
              </p>
            </div>
          </div>
        </div>
    )
}

export default SideBar;