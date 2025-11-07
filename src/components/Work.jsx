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
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 items-start group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Left Column: Static Image */}
              <div
                className="shadow-xl shadow-[#040c16] bg-gradient-to-br from-[#162d4e] to-[#1a3a5e] rounded-lg 
             flex justify-center items-center mx-auto content-div 
             h-80 w-full bg-contain bg-center bg-no-repeat border border-[#2a4a6e] hover:border-[#ea3c12] transition-colors duration-300"
              >
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${
                    item.name === "Pasteproof"
                      ? "max-w-[128px] max-h-[128px]"
                      : "w-full h-full"
                  } object-contain p-4 transition-transform duration-300 group-hover:scale-105`}
                />
              </div>

              {/* Right Column: Description Box */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-[#fefcf9] to-[#f5f1eb] shadow-xl border border-[#e8ddd4] h-full hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-3 border-b-2 border-[#ea3c12] pb-2 text-gray-800">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1e40af] hover:text-[#ea3c12] visited:text-[#1e40af] font-bold no-underline hover:no-underline transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-gray-800">{item.name}</span>
                  )}
                </h2>

                <p className="text-base text-gray-800 leading-relaxed">
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
