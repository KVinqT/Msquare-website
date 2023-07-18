import Count from "../components/Count";
import test from "../assets/photos/test.png";
import code from "../assets/photos/code.png";
import live from "../assets/photos/live.png";
import plan from "../assets/photos/plan.png";
import details from "../assets/photos/details.png";
import Questions from "../components/Questions";
import { TfiBackLeft } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FooterDetails from "../components/FooterDetails";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { servicedetails } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [servicedetails]);
  return (
    <div className="h-full">
      {/* <NavBar /> */}
      <div className="max-w-full max-h-full md:mt-8 mt-12">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="z-10 inline-block md:text-2xl sm:text-xl text-lg font-bold ml-5 fixed bg-[#D4AF37] shadow-md rounded-full p-3 top-7 -left-2 sm:left-1 md:left-2"
        >
          <TfiBackLeft />
        </div>
        <div className="w-[80%] m-auto md:max-w-[1600px] md:flex md:flex-row-reverse md:justify-between">
          <div className="mt-8 md:mt-0 md:max-w-full lg:max-w-[600px] flex items-center">
            <img src={details} alt="" />
          </div>

          <div className="mt-4 md:mt-8 md:max-w-[50%] justify-start ">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="dark:text-white font-sans tracking-widest font-bold"
            >
              WEBSITE
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="dark:text-white inline-block md:max-w-[540px] text-5xl font-mono font-extrabold mt-4 tracking-wide"
            >
              {" "}
              Website <span className="text-[#D4AF37] block">Development</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="md:max-w-[450px] mt-4 text-xl font-sans font-medium text-gray-500"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis eos reiciendis ea beatae ut, quibusdam voluptatem
              fugiat, rem autem hic quas error consectetur voluptas dignissimos
              quia nulla perferendis distinctio magni!
            </p>
            <div className="text-xl rounded-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] w-[180px] h-[60px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-mono text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4">
              <button className="">Send Request</button>
            </div>
          </div>
        </div>
        {/* Counter */}
        <Count />
        {/* process */}
        <div className="w-[80%] m-auto md:max-w-[1600px] overflow-hidden">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-20 md:mt-24 text-black dark:text-white font-bold text-3xl sm:text-4xl lg:text-5xl"
          >
            Msquare's <span className="text-[#D4AF37]">Process</span>
          </h1>
          <div className="m-auto md:flex md:flex-wrap sm:flex-col sm:justify-center sm:items-center sm:mt-20 md:flex-row lg:justify-between mt-16 flex flex-col items-center justify-center border-b-2 border-b-[#D4AF37] pb-10">
            <div className="flex">
              <div className="max-w-[50px] h-[50px] mr-8">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-2xl md:text-2xl font-sans font-bold bg-[#D4AF37] text-white md:mr-12 rounded-full sm:max-h-[50px] sm:w-[50px] max-h-[52px] w-[50px] h-full justify-center items-center flex"
                >
                  1
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="max-w-[400px]"
              >
                <h1 className="md:text-3xl text-xl font-bold dark:text-white">
                  Project Planning
                </h1>
                <p className="md:text-xl text-md font-sans font-medium text-gray-500 mt-5">
                  The project overall will be divided into different sprint
                  plans, and the timeline will be structured accordingly. You
                  will be given a link to follow and monitor the progress of the
                  various sprint plans.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[360px] sm:max-w-[290px] max-w-[200px]">
              <img src={plan} alt="" className="rounded-3xl mt-8 " />
            </div>
          </div>
          <div className="md:flex md:flex-wrap sm:flex-col sm:justify-center sm:items-center sm:mt-20 mt-6 md:flex-row lg:justify-between md:mt-6 flex flex-col items-center justify-center border-b-2 border-b-[#D4AF37] pb-10">
            <div className="flex lg:mt-[-100px] md:mt-4">
              <div className="max-w-[50px] h-[50px] mr-8">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-2xl md:text-2xl font-sans font-bold bg-[#D4AF37] text-white md:mr-12 rounded-full sm:max-h-[50px] sm:w-[50px] max-h-[52px] w-[50px] h-full justify-center items-center flex"
                >
                  2
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="max-w-[400px]"
              >
                <h1 className="md:text-3xl text-xl font-bold dark:text-white">
                  Development{" "}
                </h1>
                <p className="md:text-xl text-md font-sans font-medium text-gray-500 mt-5">
                  The following step is to commence the actual coding of the
                  project and to successfully complete each sprint in a timely
                  manner.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[360px] sm:max-w-[290px] max-w-[200px]">
              <img
                src={code}
                alt=""
                className="rounded-3xl m-auto mt-8 md:mt-0"
              />
            </div>
          </div>
          <div className="md:flex md:flex-wrap sm:flex-col sm:justify-center sm:items-center sm:mt-20 mt-6 md:flex-row lg:justify-between md:mt-10 flex flex-col items-center justify-center border-b-2 border-b-[#D4AF37] pb-10">
            <div className="flex">
              <div className="max-w-[50px] h-[50px] mr-8">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-2xl md:text-2xl font-sans font-bold bg-[#D4AF37] text-white md:mr-12 rounded-full sm:max-h-[50px] sm:w-[50px] max-h-[52px] w-[50px] h-full justify-center items-center flex"
                >
                  3
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="max-w-[400px]"
              >
                <h1 className="md:text-3xl text-xl font-bold dark:text-white">
                  QA Procedures and User Testing{" "}
                </h1>
                <p className="md:text-xl text-md font-sans font-medium text-gray-500 mt-5">
                  After the development phase is finished, there will be a
                  thorough quality assurance process for the entire project, as
                  well as user testing where selected individuals will try out
                  all the features of the product to ensure it functions
                  properly.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[360px] sm:max-w-[290px] max-w-[200px]">
              <img src={test} alt="" className="rounded-3xl m-auto mt-8" />
            </div>
          </div>
          <div className="md:flex md:flex-wrap sm:flex-col sm:justify-center sm:items-center sm:mt-20 mt-4 md:flex-row lg:justify-between lg:mt-2 md:mt-6 flex flex-col items-center justify-center border-b-2 border-b-[#D4AF37] pb-10">
            <div className="flex">
              <div className="max-w-[50px] h-[50px] mr-8">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-2xl md:text-2xl font-sans font-bold bg-[#D4AF37] text-white md:mr-12 rounded-full sm:max-h-[50px] sm:w-[50px] max-h-[52px] w-[50px] h-full justify-center items-center flex"
                >
                  4
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="max-w-[400px]"
              >
                <h1 className="md:text-3xl text-xl font-bold dark:text-white">
                  Deploy Live{" "}
                </h1>
                <p className="md:text-xl text-md font-sans font-medium text-gray-500 mt-5">
                  Upon completing all testing and configuration, the final step
                  is to bring the website live by deploying it to the internet.
                  This will involve setting up hosting and domain configurations
                  and waiting for final approval to launch
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[360px] sm:max-w-[290px] max-w-[200px]">
              <img src={live} alt="" className="rounded-3xl m-auto mt-8" />
            </div>
          </div>
          <div className="m-auto mt-12 border-b">
            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-center font-semibold text-xl dark:text-white"
              >
                TOP <span className="text-[#D4AF37]">Questions</span>
              </p>
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-4 text-center font-bold md:text-5xl sm:text-4xl text-3xl text-MidnightNavy dark:text-white"
              >
                Top 4 Asked <span className="text-[#D4AF37]">Questions</span>
              </h1>
            </div>
            <Questions />
          </div>
        </div>
      </div>
      {/* <BottomNav /> */}
      <div className="w-full h-[300px] flex mt-20 bg-[#191919] text-white border-b dark:border-t dark:border-[#D4AF37]">
        <div className="m-auto w-[610px]">
          <p className="font-sans font-bold uppercase text-center">Services</p>
          <h1 className="font-sans font-bold md:text-6xl sm:text-4xl text-3xl text-center mt-2">
            For <span className="text-[#D4AF37]">Reliable Websites</span>
          </h1>
          <div className="text-center mt-6 text-lg font-sans font-bold gap-3">
            <p>+959785562367</p>
          </div>
        </div>
      </div>
      <FooterDetails />
    </div>
  );
};

export default ServiceDetails;
