import Game from "../assets/game.mp4";
import { BotMessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-8 ">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        All Night
        <span className="bg-gradient-to-r from-white to-purple-800 text-transparent bg-clip-text ">
          {" "}
          Federation
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We are a group of people who love{" "}
        <span className="bg-gradient-to-r from-neutral-500 to-purple-800 text-transparent bg-clip-text">
          to GAME all night{" "}
        </span>{" "}
        long
        <br />
        We are a federation of gamers who love come together{" "}
        <span className="bg-gradient-to-r from-neutral-500 to-purple-800 text-transparent bg-clip-text">
          and share the fun
        </span>
      </p>
      <div className="flex justify-center my-10">
        <a
          className="bg-gradient-to-r from-neutral-700/80 to-purple-800 py-3 px-4 mx-3 mt-3 rounded-md hover:from-purple-800 hover:to-neutral-700/80 transition duration-300 ease-in-out"
          href="https://discord.gg/Debm8HkJ9v"
        >
          Join Us On Discord
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-purple-700 shadow-purple-400"
        >
          <source src={Game} type="video/mp4" />
          Your browser doesnt support video
        </video>
      </div>
    </div>
  );
}
