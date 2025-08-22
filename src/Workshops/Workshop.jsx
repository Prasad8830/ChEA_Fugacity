import React, { useEffect } from "react";
import workshopDetails from "./WorkshopDetails";
import WorkshopCard from "./WorkshopCard";
import WorkshopShortCard from "./WorkshopShortCard";
import AOS from "aos";

const Workshops = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    window.scroll(0, 0);
  }, []);

  return (
    <div className="pt-36 pb-16 flex flex-col justify-center items-center bg-darkSecondary min-h-screen">
      <div className="text-center mb-12">
        <h1 
          className="text-3xl md:text-5xl font-bold text-darkMain font-nunito"
          data-aos="fade-down"
        >
          Workshops
        </h1>
        <p 
          className="text-lg text-lightSecondary mt-4 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
        >
          Enhance your skills with our hands-on workshops designed to provide practical knowledge and industry insights.
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {workshopDetails.map((workshop, index) => (
            <WorkshopCard
              key={workshop.title}
              title={workshop.title}
              description1={workshop.description1}
              description2={workshop.description2}
              description3={workshop.description3}
              description4={workshop.description4}
              description5={workshop.description5}
              url={workshop.url1}
              link={workshop.link}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;