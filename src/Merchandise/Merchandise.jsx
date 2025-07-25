import React, { useEffect, useState } from "react";
// import { useState } from "react";
import AOS from "aos";
import "./Merchandise.css";
import MerchCard from "./MerchCard";
import { Link } from "react-router-dom";

const Merchandise = () => {
  const merch_front = `/images/varsity_(1).png`;
  const merch_back = `/images/varsity_(2).png`;
  const bg = `/images/bg.gif`;
  const polo_front = `/images/tshirt1.jpeg`;
  const polo_back = `/images/tshirt2.jpeg`;
  const [merch, setMerch] = useState("T-shirt");
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
        Merchadise
      </h1>
      
      {/* Stay tuned message for 2025 */}
      <div className="flex justify-center items-center mt-10 mb-20 pb-8" data-aos="fade-up">
        <div className="text-center max-w-md mx-auto p-8 bg-darkPrimary rounded-lg mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-lightPrimary mb-4">
            Stay Tuned!
          </h2>
          <p className="text-lg text-lightPrimary">
            New merchandise designs for 2025 will be revealed soon. Keep checking back for updates!
          </p>
        </div>
      </div>

      {/* Commented out 2024 merchandise */}
      {/*
      <div className="flex justify-center items-center">
        <p className="text-white px-6 mb-6 text-center">
          Hola Chemical Engineers! The wait is finally over, ChEA IIT Kharagpur
          proudly unveils the merchandise for 2024!
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          className={`px-5 rounded-lg py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${
            merch === "T-shirt" && "underline"
          }`}
          onClick={() => setMerch("T-shirt")}
        >
          Polo T-shirt
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2 m-2 font-bold text-xl ${
            merch === "Varsity" && "underline"
          }`}
          onClick={() => setMerch("Varsity")}
        >
          Varsity
        </button>
      </div>
      {merch === "T-shirt" && (
        <>
          <div
            id="Polo"
            className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto"
          >
            <MerchCard
              name="Front"
              position="Summer Merchandise"
              email="XXXXX@che.iitkgp.ac.in"
              phone="XXXXXX-XXXXX"
              url={polo_front}
            />
            <MerchCard
              name="Back"
              position="Summer Merchandise"
              email="XX@che.iitkgp.ac.in"
              phone="XXXXXX-XXXXX"
              url={polo_back}
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-[4px] bg-[#20CD8D] mt-5 text-lightPrimary py-2 font-bold text-xl hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto px-5 text-center disabled">
              Coming Soon
            </button>
          </div>
        </>
      )}
      {merch === "Varsity" && (
        <>
          <div
            id="varsity"
            className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto"
          >
            <MerchCard
              name="Front"
              position="Winter Merchandise"
              email="XXXXX@che.iitkgp.ac.in"
              phone="XXXXXX-XXXXX"
              url={merch_front}
            />
            <MerchCard
              name="Back"
              position="Winter Merchandise"
              email="XX@che.iitkgp.ac.in"
              phone="XXXXXX-XXXXX"
              url={merch_back}
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-[4px] bg-[#20CD8D] mt-5 text-lightPrimary py-2 font-bold text-xl hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto px-5 text-center disabled">
              Coming Soon
            </button>
          </div>
        </>
      )}
      */}
    </div>
  );
};

export default Merchandise;