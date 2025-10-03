<<<<<<< HEAD
import React from "react";
import { data } from "../data/data.js";

const Work = ({ className }) => {
  const project = data;

  return (
    <div
      name="work"
      className={`w-full text-gray-300 bg-[#0a192f] ${className}`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ea3c12]">
            Work
          </p>
          <p className="py-6">// Check out my most recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-1 gap-8">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4 items-start">
              {/* Left Column: Static Image */}
              <div
                className="shadow-lg shadow-[#040c16] bg-[#162d4e] rounded-md 
             flex justify-center items-center mx-auto content-div 
             h-80 w-full bg-contain bg-center bg-no-repeat"
              >
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Right Column: Description Box */}
              <div className="p-6 rounded-md bg-gray-200 shadow-md h-full">
                <h2 className="text-2xl font-semibold mb-3 border-b border-gray-400 pb-2 text-gray-800">
                  {item.name}
                </h2>

                <p className="text-base text-gray-800">
                  {item.description
                    ? item.description.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex <
                            item.description.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : "No description provided for this project."}
                </p>
              </div>
            </div>
          ))}
        </div>
=======
import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#ea3c12]'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
>>>>>>> 936f611bea09b4c69f9b19732de16c4923b4e609
      </div>
    </div>
  );
};

export default Work;
