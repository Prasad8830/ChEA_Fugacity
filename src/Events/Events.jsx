import React, { useEffect } from "react";
import eventDetails from "./eventDetails";
import EventCard from "./EventCard";
import EventShortCard from "./EventShortCard";
import AOS from "aos";
import PreviousEvents from "./PreviousEvents";
const Events = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="pt-36 pb-16 flex flex-col justify-center items-center bg-darkSecondary min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-darkMain font-nunito">
          Events
        </h1>
      </div>
      
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {eventDetails.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              description1={event.description1}
              description2={event.description2}
              description3={event.description3}
              description4={event.description4}
              description5={event.description5}
              url={event.url1}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
