import { BsCodeSlash } from "react-icons/bs";
import IndustryCard from "../components/IndustryCard";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const handleDefault = (event) => {
    event.preventDefault();
    navigate("/service-details");
  };
  return (
    <div className="h-full mt-16" id="services">
      <div className="w-[80%] m-auto md:max-w-[1600px]">
        <div className="flex">
          <div>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              className="md:text-4xl sm:text-3xl text-2xl font-sans font-bold dark:text-white max-w-full"
            >
              Initation to <span className="text-[#D4AF37]">Our Services</span>
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              className="dark:text-white lg:text-2xl md:text-3xl text-xl font-sans font-semibold lg:max-w-[470px] md:max-w-[600px] lg:mt-8 md:mt-6 mt-8"
            >
              Website Development Service
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              className="dark:text-gray-400 font-medium mt-6 lg:text-md md:text-xl text-lg font-sans text-gray-600 max-w-[700px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fugiat iste, rerum nemo vitae, nesciunt et temporibus ipsam
              veniam, nisi consectetur enim?
            </p>
            <div
              onClick={handleDefault}
              className="rounded-2xl text-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] w-[150px] h-[50px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-sans text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4"
            >
              <button className="">For Details</button>
            </div>
          </div>
          {/* icon */}
          <div className=" m-auto animate-bounce">
            <BsCodeSlash className="md:text-9xl sm:text-8xl text-7xl text-[#D4AF37]" />
          </div>
        </div>
        {/* Industries Card */}
        <div className="m-auto mt-12 border-b border-[#D4AF37]">
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-center font-semibold text-xl dark:text-white"
            >
              TOP <span className="text-[#D4AF37]">INDUSTRIES</span>
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-4 text-center font-bold md:text-5xl sm:text-4xl text-2xl text-MidnightNavy dark:text-white"
            >
              <span className="text-blue">Industries</span> We&apos;ve Worked
              With
            </h1>
          </div>
          <IndustryCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
