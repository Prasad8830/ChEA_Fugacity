import React, { useEffect, useState } from "react";
import AOS from "aos";
import ScheduleEle from "./scheduleEle";
import ScheduleEle2 from "./scheduleEle2";

function Schedule() {
  const [isHovered, setIsHovered1] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const backgroundImage = `/images/back_about2.png`;
  const [day, setDay] = useState("Day-1");
  const divStyle = {
    backgroundColor: isHovered ? "rgba(0,0,0,0.5)" : "transparent",
    transition: "background-color 0.3s ease",
    display: "flex",
    flexDirection: "row",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div
      className="pt-28 w-full overflow-hidden bg-darkSecondary pb-5"
      id="schedule"
    >
      <h1
        className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4"
        data-aos="fade-down"
      >
        Schedule
      </h1>
      
      {/* Stay tuned message for 2025 */}
      {/* <div className="flex justify-center items-center mt-10 mb-20 pb-1" data-aos="fade-up">
        <div className="text-center max-w-md mx-auto p-8 bg-darkPrimary rounded-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightPrimary mb-4">
            Stay Tuned!
          </h2>
          <p className="text-lg text-lightPrimary">
            The schedule for Fugacity 2025 will be announced soon. 
            Keep checking back for updates!
          </p>
        </div>
      </div> */}

      {/* Commented out 2024 schedule */}
      
      <div className="flex justify-center items-center gap-10">
        {/* <button
          className={`px-5 rounded-lg  py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${
            day === "Day-1" && "underline"
          }`}
          onClick={() => setDay("Day-1")}
          data-aos="fade-right"
        >
          Day 1
        </button> */}
        {/* <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${
            day === "Day-2" && "underline"
          }`}
          onClick={() => setDay("Day-2")}
          data-aos="fade-left"
        >
          Day 2
        </button> */}
      </div>

      {day === "Day-1" && (
        <>
          <div
            id="Day-1"
            className="flex flex-col gap-2 border justify-around items-center mt-10 max-w-[600px] mx-auto"
            role="tabpanel"
            style={{
              position: "relative",
            }}
            data-aos="fade-up"
          >
            <ScheduleEle
              time="08:30 AM – 10:00 AM"
              event="Code the Problem"
              description="Programming Competition"
            />
            <ScheduleEle2
              time="10:00 AM – 11:00 AM"
              event="Inauguration Ceremony"
              description=""
            />
            <ScheduleEle
              time="11:00 AM – 11:15 AM"
              event="Tea Break"
              description=""
            />
            <ScheduleEle2
              time="11:15 AM – 01:00 PM"
              event="Chemical Engineering Quiz Competition"
              description=""
            />
            <ScheduleEle
              time="01:00 PM – 02:00 PM"
              event="Lunch Break"
              description=""
            />
            <ScheduleEle2
              time="02:00 PM – 04:00 PM"
              event="Optimize it competition"
              description=""
            />
            <ScheduleEle
              time="02:00 PM – 04:00 PM"
              event="Workshop"
              description="Simulation using COMSOL"
            />
            <ScheduleEle2
              time="04:00 PM – 05:00 PM"
              event="Workshop"
              description="Practical Way of Making Lithium-Ion Batteries"
            />
            <ScheduleEle
              time="05:00 PM – 05:30 PM"
              event="Validator Function"
              description="Concluding Session"
            />
          </div>
        </>
      )}
      {/* {day === "Day-2" && (
        <>
          <div
            id="Day-2"
            className="flex flex-col gap-2  justify-around border items-center mt-10 md:w-[600px] mx-auto"
            data-aos="fade-up"
          >
            <ScheduleEle2
              time="09:00 AM"
              event="ChemIntelligence"
              description="Presentation for Chemintelligence/ ML"
            />
            <ScheduleEle
              time="10:30 AM"
              event="Case Study"
              description="Presentation for Case Study"
            />
            <ScheduleEle2
              time="12:00 PM"
              event="Cross Word Puzzle"
              description="Cross Word Puzzle competetion"
            />
            <ScheduleEle time="01:00 PM" event="Lunch" description="" />
            <ScheduleEle2
              time="02:30 PM"
              event="Quiz"
              description="Quiz competetion on Chemical Engineering"
            />
            <ScheduleEle
              time="03:30 PM"
              event="Chem Theatre"
              description="Chemical Engineering Theatre"
            />
            <ScheduleEle2 time="06:00 PM" event="Dinner" description="" />
          </div>
        </>
      )} */}
     
    </div>
  );
}

export default Schedule;