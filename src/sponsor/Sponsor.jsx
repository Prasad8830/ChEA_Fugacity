import React, { useEffect, useState } from "react";

const Sponsers = () => {
  const nfit = `${process.env.PUBLIC_URL}/images/nfint-logo.5cc85aabb7c4fa57db1a.png`;
  const msTeamLogo = `${process.env.PUBLIC_URL}/images/Microsoft_Office_Teams_(2018–present).svg`;
  const gamaLogo = `${process.env.PUBLIC_URL}/images/Gamma_Logo.svg`;
  const elmLogo = `${process.env.PUBLIC_URL}/images/Gamma_Logo.svg`;
  const logoIiiche = `${process.env.PUBLIC_URL}/images/logos/logoiiche.svg`;
  const ved = `${process.env.PUBLIC_URL}/images/vedanta colored logo.png`;
  const Altamira = `${process.env.PUBLIC_URL}/images/Altamira Logo.png`;
  const Haldiya = `${process.env.PUBLIC_URL}/images/Title_Sponsor.svg`;

  const [year, setYear] = useState(2025);
  const [isMore, setIsMore] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center  pt-36 bg-darkSecondary">
      <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-5">
        Sponsors
      </h1>
      <div className="flex justify-center items-center m-5 gap-auto md:gap-10">
        <button
          className={`px-5 rounded-lg  py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${
            year === 2022 && "underline"
          }`}
          onClick={() => setYear(2022)}
        >
          2022
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${
            year === 2023 && "underline"
          }`}
          onClick={() => setYear(2023)}
        >
          2023
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${
            year === 2024 && "underline"
          }`}
          onClick={() => setYear(2024)}
        >
          2024
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${
            year === 2025 && "underline"
          }`}
          onClick={() => setYear(2025)}
        >
          2025
        </button>
      </div>
      <div className="flex  justify-center items-center w-full my-5">
        {year === 2022 && (
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center ">
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md mx-2 mb-3"
              src={logoIiiche}
              alt="The Indian Institute of Chemical Engineers logo"
              title="The Indian Institute of Chemical Engineers logo"
              height={100}
              width={100}
              loading="lazy"
            />
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md mx-2 mb-3"
              src={gamaLogo}
              alt="gamaLogo"
              title="gamaLogo"
              width={100}
              height={100}
              loading="lazy"
            />
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md  mx-2 mb-3"
              src={msTeamLogo}
              alt="msteamLogo"
              title="msteamLogo"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        )}
        {year === 2023 && (
          <div className="w-full flex flex-col justify-evenly items-center text-lightSecondary font-avenir ">
            <img
              src={nfit}
              className="w-[100%] md:w-[50%] rounded-[1.2rem] px-2"
              alt="nfitLogo"
              title="nfitLogo"
              width={100}
              height={100}
              loading="lazy"
            />
            {isMore ? (
              <div
                className="w-[70%] text-justify my-5 text-md"
                onClick={() => setIsMore(false)}
              >
                <br />
              </div>
            ) : (
              <div className="w-[70%] text-justify my-5 text-md"></div>
            )}
          </div>
        )}

        {year === 2024 && (
          <div className="w-full max-w-[1000px] gap-[30px] p-10 flex flex-col md:flex-row justify-around   items-center text-lightSecondary font-avenir ">
            <img
              src={ved}
              className="w-[100%] md:w-[40%] rounded-lg"
              alt="vedantaLogo"
              title="vedantaLogo"
              width={100}
              height={100}
              loading="lazy"
            />
            <img
              src={Altamira}
              className="w-[100%] md:w-[40%] rounded-lg"
              alt="altamiraLogo"
              title="altamiraLogo"
              height={100}
              width={100}
              loading="lazy"
            />
          </div>
        )}
        {year === 2025 && (
          <div className="w-full max-w-[1000px] gap-[30px] p-5 md:p-10 flex flex-col md:flex-row justify-around items-center text-lightSecondary font-avenir">
            <img
              src={Haldiya}
              className="w-[80%] md:w-[60%] rounded-lg"
              alt="haldiyaLogo"
              title="haldiyaLogo"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sponsers;