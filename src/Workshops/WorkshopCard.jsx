import React from "react";
import AOS from "aos";

const WorkshopCard = (props) => {
  return (
    <div
      id={props.title}
      className="workshop-card bg-darkPrimary rounded-lg shadow-lg p-6 md:p-8 mb-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Image Section */}
        {/* <div className="lg:w-1/3">
          <img
            loading="lazy"
            src={props.url}
            alt={props.title}
            title={props.title}
            className="w-full h-64 lg:h-48 object-cover rounded-lg"
          />
        </div> */}
        
        {/* Content Section */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold text-lightPrimary font-nunito mb-4">
            {props.title}
          </h2>
          
          <div className="space-y-3 text-lightSecondary">
            {props.description1 && (
              <p className="text-base leading-relaxed">{props.description1}</p>
            )}
            {props.description2 && (
              <p className="text-base leading-relaxed">{props.description2}</p>
            )}
            {props.description3 && (
              <p className="text-base leading-relaxed">{props.description3}</p>
            )}
            {props.description4 && (
              <p className="text-base leading-relaxed">{props.description4}</p>
            )}
            {props.description5 && (
              <p className="text-base leading-relaxed">{props.description5}</p>
            )}
          </div>
          
          {/* {props.link && (
            <div className="mt-6">
              <button className="rounded-[4px] bg-blue-500 mt-5 text-lightPrimary py-2 font-bold text-xl hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-200 sm:w-auto px-5 text-center mx-auto">
                <a href={props.link}>Learn More</a>
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;