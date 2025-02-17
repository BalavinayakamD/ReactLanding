import React from "react";
import Pubg from "../assets/pubg.jpg";
const What = () => {
  return (
    <div
      className="what relative lg:mt-16 mt-6 flex flex-col items-center justify-center"
      id="what"
    >
      <img
        src={Pubg}
        className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400"
      ></img>
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-400 rounded-md h-6 text=sm font-medium px-2 py-1 uppercase transtion ease-in 300 hover:shadow-purple-600">
          What We Do
        </span>
      </div>
      <p className="text-center mt-10 text-lg text-neutral-500 max-w-4xl">
        We chat , game , code and repeat . We love what we do . We dont know
        anything about what we are doing but we are getting there . We are a
        group of people who love to game and code . We some times{" "}
        <span className="bg-gradient-to-r from-neutral-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          create BGMI Room matches
        </span>{" "}
        and sometimes throw a{" "}
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent ease-in-out bg-clip-text hover:bg-gradient-to-l hover:from-pink-500 hover:via-red-500 hover:to-yellow-500">
          watch party
        </span>
        . We are currently working on a game named{" "}
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          Chronic Nights!
        </span>
      </p>
    </div>
  );
};

export default What;
