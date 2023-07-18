import AnimationText from "../components/AnimationText";
import Email from "../components/Email";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Contact = () => {
  const navigate = useNavigate();

  return (
    <div id="contactus" className="h-full snap-center">
      <div className="max-w-full max-h-full md:mt-16 mt-12">
        <div className="w-[80%] m-auto md:max-w-[1600px] md:flex md:flex-wrap md:flex-row md:justify-between">
          {" "}
          <AnimationText />
          <Email />
        </div>
        <div className="w-full h-[300px] flex mt-20 bg-[#191919] text-white border-b dark:border-t dark:border-[#D4AF37]">
          <div className="m-auto w-[500px]">
            <p className="font-sans font-bold uppercase text-center">
              Services
            </p>
            <h1 className="font-sans font-bold md:text-6xl sm:text-4xl text-3xl mt-2 text-center">
              For <span className="text-[#D4AF37]">Details</span>
            </h1>
            <a href="#services">
              {" "}
              <div className="w-[50px] m-auto mt-6 bg-[#D4AF37] rounded-full animate-pulse">
                <GrFormNextLink className="text-center text-5xl p-2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
