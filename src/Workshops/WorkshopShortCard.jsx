import React from "react";
import AOS from "aos";

const WorkshopShortCard = (props) => {
  return (
    <div
      className="workshopShortCard bg-darkPrimary rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <img
        loading="lazy"
        src={props.url}
        alt={props.title}
        title={props.title}
        width={100}
        height={100}
        className="mx-auto rounded-lg mb-3"
      />
      <h2 className="text-center text-lightSecondary font-semibold text-lg font-nunito mb-3">
        {props.title}
      </h2>
      <button className="rounded-md bg-darkSecondary text-lightPrimary p-2 text-sm font-bold cursor-pointer hover:bg-darkPrimary transition-colors duration-300">
        <a href={`#${props.title}`}>Know More</a>
      </button>
    </div>
  );
};

export default WorkshopShortCard;