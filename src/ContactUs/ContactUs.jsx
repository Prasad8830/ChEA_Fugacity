import React, { useEffect } from "react";
import CardContact from "./CardContact";
const ContactUs = () => {
  const prasad = `/images/heads/Prasad.webp`;
  const ankit = `/images/heads/Ankit.webp `;
  const ayush = `/images/heads/Ayush.webp`;
  const rishi = `/images/heads/Rishi.webp`;
  const ganesh = `/images/heads/Ganesh.webp`;
  const naveen = `/images/heads/Naveen.webp`;
  const saakshi = `/images/heads/Saakshi.webp`;
  const prem = `/images/heads/Prem_Kumar.webp`;
  const akshat = `/images/heads/Akshat_Kumar.webp`;
  const hod = `/images/heads/HOD.webp`;
  const facad = `/images/heads/Facad.jpg`;
  const proffIncharge = `/images/heads/proffIncharge.png`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className=" pt-36 w-full bg-darkSecondary pb-5 ">
      <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4">
        Acknowledgement
      </h1>
      <div
        id="prof"
        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto"
      >
        <CardContact
          name="Prof. Sudipto Chakraborty"
          position="HOD Chemical Engineering Department"
          email="che_hod@che.iitkgp.ac.in"
          phone="3222-282249"
          url={hod}
          link="https://www.linkedin.com/in/prasad-shinde-87a559289/"
        />

        <CardContact
          name="Prof. Koustuv Ray"
          position="ChEA Incharge"
          email="koustuv@che.iitkgp.ac.in"
          phone="3222-284582"
          url={facad}
        />
        <CardContact
          name="Prof. Swambabu Varanasi"
          position="Professor Incharge"
          email="swambabu@che.iitkgp.ac.in"
          phone=""
          url={proffIncharge}
        />
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4">
        Our Team
      </h2>

      <div
        id="tech"
        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1000px] mx-auto"
      >
        <CardContact
          name="Prasad Shinde"
          position="Web Team Head"
          email="prasadshinde8830@gmail.com"
          phone="9604329368"
          url={prasad}
          link="https://www.linkedin.com/in/prasad-shinde-87a559289/"
        />
        <CardContact
          name="Ankit Anand"
          position="Design Team head"
          email="ankitanand3027@gmail.com"
          phone="7413027632"
          url={ankit}
          link = "https://www.linkedin.com/in/ankitanand30/"
        />
      </div>
      <div
        id="tech"
        className="flex flex-col gap-2 lg:flex-row justify-around items-center mt-5 max-w-[1000px] mx-auto"
      >
        <CardContact
          name="Ayush Kumar Maurya"
          position="Sponsorship Team Head"
          email="ayush.maurya.iitkgp@gmail.com"
          phone="8604336024"
          url={ayush}
          link="https://www.linkedin.com/in/ayush-kumar-maurya-065b14290/"
        />
        <CardContact
          name="Rishi Kushwaha"
          position="Sponsorship Team Head"
          email="rishikushwaha125@gmail.com"
          phone="8604336024"
          url={rishi}
          link = "https://www.linkedin.com/in/rishi-kushwaha-2baa88244/"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-around items-center mt-5 max-w-[1500px] mx-auto">
        <CardContact
          name="Naveen G"
          position="Events Team Head"
          email="naveen7115ether@gmail.com"
          phone="8247365739"
          url={naveen}
          link="https://www.linkedin.com/in/naveen-g-9785ba323/"
        />
        <CardContact
          name="Bhukya Ganesh"
          position="Events Team Head"
          email="naiknagesh38656@gmail.com"
          phone="9390330178"
          url={ganesh}
          link="https://www.linkedin.com/in/ganesh-bhukya-081b352a9/"
        />
        <CardContact
          name="Saakshi Baranwal"
          position="Events Team Head"
          email="saakshibaranwal22@gmail.com"
          phone="8918732423"
          url={saakshi}
          link="https://www.linkedin.com/in/saakshi-baranwal-977a0b28a/"
        />
        <CardContact
          name="Akshat Kumar"
          position="Events Team Head"
          email="08akshatkumar@gmail.com"
          phone="8329057541"
          url={akshat}
          link="https://www.linkedin.com/in/akshat-kumar-100a6027b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTlBplUjZSuW337jRDzFn0A%3D%3D"
        />
        <CardContact
          name="Prem Kumar Bodigadla"
          position="Events Team Head"
          email="prembhashyam9948@gmail.com"
          phone="7386909956"
          url={prem}
          link="https://www.linkedin.com/in/prem-kumar-bodigadla-0854622a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
      </div>
    </div>
  );
};

export default ContactUs;
