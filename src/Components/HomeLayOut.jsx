import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
// import Lottie from "lottie-react";
// import animationData from "./lottie-animation.json"; // 

const HomeLayOut = () => {
  const words = ["Innovate", "Build", "Learn", "Repeat!"];
  const colors = ["#F59E0B", "#10B981", "#3B82F6", "#EF4444"];

  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* <Lottie animationData={animationData} loop autoplay /> */}
        </div>
        <div className="relative z-10 text-center px-4 md:px-0 space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              onType={(index) => {
                const heading = document.querySelector("h1");
                if (heading) heading.style.color = colors[index % colors.length];
              }}
            />
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium">
            Turning ideas into reality, one line of code at a time.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <a
              href="/BrowseTask"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Browse Tasks
            </a>
            <a
              href="/AddTask"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              Add Task
            </a>
          </div>
        </div>
      </section>

      {/* User Experience Section */}
      <section className="py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-extrabold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
            <p>Create an account and explore the tasks you can post or bid on.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Post or Bid</h3>
            <p>Post your tasks or bid on projects that match your skills.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
            <p>Work with others, complete tasks, and grow your portfolio.</p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 px-6 md:px-24 text-center bg-gray-800">
        <h2 className="text-4xl font-extrabold mb-12">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="w-40 h-40 bg-gray-700 rounded flex flex-col gap-2 items-center justify-center"><FaFacebook />FaceBook MarketPlace</div>
          <div className="w-40 h-40 bg-gray-700 rounded flex flex-col gap-2 items-center justify-center"><FaBriefcase />BD Job Portal</div>
          <div className="w-40 h-40 bg-gray-700 rounded flex flex-col gap-2 items-center justify-center"><FaBriefcase />USA Portal</div>
          <div className="w-40 h-40 bg-gray-700 rounded flex flex-col gap-2 items-center justify-center"><FaBriefcase />South  Job Portal</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-extrabold mb-12">What Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <p>"This platform helped me get my first freelance project within a week!"</p>
            <span className="block mt-4 font-bold">- Alice</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <p>"Posting tasks has never been easier. Highly recommended!"</p>
            <span className="block mt-4 font-bold">- Bob</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 hover:scale-105 transform transition">
            <p>"I love collaborating with talented developers here."</p>
            <span className="block mt-4 font-bold">- Charlie</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeLayOut;
