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
      </div>
    </div>
  );
};

export default Work;
