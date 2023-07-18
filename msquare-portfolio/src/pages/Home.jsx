import NavBar from "../components/NavBar";
import Contact from "./Contact";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import mainphoto from "../assets/photos/mainphoto.png";
import About from "./About";
import Services from "./Services";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const { home } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [home]);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-full" id="home">
      <NavBar />
      <div className="max-w-full max-h-full md:mt-10 mt-12">
        <div className="w-[80%] m-auto md:max-w-[1600px] md:flex md:flex-row-reverse md:justify-between">
          <div className="mt-8 md:mt-0 md:max-w-full lg:max-w-[500px] flex items-center">
            <img src={mainphoto} alt="" />
          </div>

          <div className="mt-4 md:mt-8 md:max-w-[50%] justify-start ">
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="dark:text-white inline-block md:max-w-[540px] text-5xl font-mono font-extrabold"
            >
              {" "}
              Your Digital Products to{" "}
              <span className="text-[#D4AF37]">Businesses</span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="2500"
              className="md:max-w-[450px] mt-4 text-xl font-sans font-medium text-gray-500"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis eos reiciendis ea beatae ut, quibusdam voluptatem
              fugiat, rem autem hic quas error consectetur voluptas dignissimos
              quia nulla perferendis distinctio magni!
            </p>
            <div
              onClick={() => {
                navigate("/service-details");
              }}
              className="rounded-xl text-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] w-[180px] h-[60px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-mono text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4"
            >
              <button className="">Details</button>
            </div>
          </div>
        </div>
        {/* socialIcons */}
        <div className="flex gap-4 lg:gap-8 lg:text-2xl max-w-[300px] justify-evenly m-auto mt-8 mb-8 border-b pb-10 dark:border-[#D4AF37]">
          <a
            href="https://m.facebook.com/groups/msquareprogramming/?ref=share&mibextid=S66gvF"
            data-aos="fade-right"
            data-aos-duration="1000"
            className="cursor-pointer p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#D4AF37] hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            data-aos="fade-right"
            data-aos-duration="1000"
            className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#D4AF37] hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="2000"
            className="cursor-pointer p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#D4AF37] hover:text-white"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@MSquareProgramming/featured"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="p-3 rounded-full bg-[#f3f3f3] shadow-2xl hover:bg-[#D4AF37] hover:text-white"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
