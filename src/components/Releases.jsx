import React from "react";

const Releases = () => {
  return(
  <div className="relative lg:mt-16 mt-6 flex flex-col items-center justify-center releases" id="releases">
    <span className="bg-neutral-900 text-purple-400 rounded-md h-6 text=sm font-medium px-3 uppercase transtion ease-in 300 hover:shadow-purple-600">
          Releases
        </span>
        <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl"> We cuuently do not have any releases :(</p>
  </div>
  );
};

export default Releases;
