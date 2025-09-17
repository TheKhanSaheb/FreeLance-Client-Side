import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
// import Lottie from "lottie-react";
// import animationData from "./lottie-animation.json"; // 

const HomeLayOut = () => {
  const words = ["Innovate", "Build", "Learn", "Repeat!"];
  const colors = ["#F59E0B", "#10B981", "#3B82F6", "#EF4444"];

    const images = [
    "https://i.ibb.co.com/Gvk8NWvK/desktop.jpg",
    "https://i.ibb.co.com/PvrrsMLW/Skills-Required-For-Current-Job-And-Future-Goals-Powerpoint-Slide-Design-Ideas-1.jpg",
    "https://i.ibb.co.com/WWGK3zY9/Job-Search-Strategy-Power-Point-Presentation.jpg",
  ];


  
  const [current, setCurrent] = useState(0);

  // Auto play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);



  return (
    <>
    <div className="bg-gray-900 text-white pt-10">
         <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>

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


  
    </>

  );
};

export default HomeLayOut;
