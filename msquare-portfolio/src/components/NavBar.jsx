import msquare from "../assets/photos/msquare.jpg";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdOutlineContactMail } from "react-icons/md";
import { FcServices } from "react-icons/fc";

const NavBar = () => {
  const [mode, setMode] = useState(null);
  const [open, setOpen] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema:dark)").matches) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <div className="max-w-full relative z-20">
      <div className="w-full pt-4 max-w-[1100px] m-auto md:justify-center md:items-center flex justify-between items-center dark:text-[#D4AF37]">
        <div className="ml-8 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden border-2 border-[#D4AF37] p-2 dark:bg-[#0a0707]">
          <img src={msquare} alt="" className="rounded-full" />
        </div>
        <div className="md:w-[600px] md:h-[40px] md:m-auto md:flex justify-evenly uppercase font-mono cursor-pointer tracking-wider hidden text-xl font-bold">
          <a href="#home">
            <div className="hover:border-b border-solid border-[#D4AF37]">
              <p className="mt-2">Home</p>
            </div>
          </a>
          <a href="#about">
            <div className="hover:border-b border-solid border-[#D4AF37]">
              <p className="mt-2">About</p>
            </div>
          </a>
          <a href="#services">
            <div className="hover:border-b border-solid border-[#D4AF37]">
              <p className="mt-2">Services</p>
            </div>
          </a>
          <a href="#contactus">
            <div className="hover:border-b border-solid border-[#D4AF37]">
              <p className="mt-2">Contact</p>
            </div>
          </a>
          <div className="mt-2 duration-300" onClick={handleMode}>
            {mode === "dark" ? (
              <CiLight className="text-3xl" />
            ) : (
              <BsMoonStars className="text-2xl" />
            )}
          </div>
        </div>
        {/* button */}
        <a
          href="#contactus"
          className="absolute left-[40%] md:static text-[#D4AF37] flex justify-center items-center w-[130px] h-[50px] bg-[#191919] rounded-xl dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-sans text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white dark:hover: uppercase mr-4"
        >
          <div>Contact</div>
        </a>
        {/* menu */}
        <div
          className="fixed right-0 sm:text-3xl text-2xl cursor-pointer md:hidden mr-4 bg-white p-2 rounded-full shadow-lg dark:bg-[#D4AF37] dark:text-black"
          onClick={() => {
            console.log("event Fired");
            setOpen(true);
          }}
        >
          <RiMenu3Fill />
        </div>
      </div>
      <div
        className={`${
          open ? "right-0" : "-right-full"
        } "z-30 fixed md:hidden top-0 w-full sm:w-[70%] h-full dark:bg-[#191919] bg-white shadow-lg dark:text-[#D4AF37] transition-all duration-300 ease-linear"`}
      >
        <div className="flex items-center justify-center relative pt-5">
          <p className="uppercase text-2xl font-semibold font-sans">Menu</p>
          <div
            className="absolute right-0 mr-4 text-3xl cursor-pointer"
            onClick={() => {
              console.log("eventCross Fired");
              setOpen(false);
            }}
          >
            <RxCross1 />
          </div>
        </div>
        <div className="uppercase mt-16 w-[80%] m-auto text-2xl font-sans font-semibold border-b border-[#D4AF37] cursor-pointer">
          <a
            href="#home"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {" "}
            <div className="flex items-center mb-12">
              <span>
                <AiOutlineHome />
              </span>
              <p className="ml-4">Home</p>
            </div>
          </a>
          <a
            onClick={() => {
              setOpen(!open);
            }}
            href="#about"
          >
            <div className="flex items-center mb-12">
              <span>
                <FcAbout className="text-black" />
              </span>
              <p className="ml-4">ABOUT</p>
            </div>
          </a>{" "}
          <a
            onClick={() => {
              setOpen(!open);
            }}
            href="#services"
          >
            <div className="flex items-center mb-12">
              <span>
                <FcServices />
              </span>
              <p className="ml-4">SERVICES</p>
            </div>
          </a>{" "}
          <a
            onClick={() => {
              setOpen(!open);
            }}
            href="#contactus"
          >
            <div className="flex items-center mb-8">
              <span>
                <MdOutlineContactMail />
              </span>
              <p className="ml-4">CONTACT</p>
            </div>
          </a>{" "}
        </div>
        <div className="mt-4 relative flex justify-between items-center">
          <div className="dropdown dropdown-top ml-8">
            <label
              tabIndex={0}
              className="dark:bg-[#D4AF37] btn m-1 w-[100px] bg-white border-none hover:bg-gray-300 text-black text-lg"
            >
              Mode
            </label>
            <ul
              tabIndex={0}
              className="bg-white dark:bg-[#D4AF37]  dropdown-content z-[1] menu p-2 shadow-xl text-lg font-semibold font-sans w-[150px]  rounded-box"
            >
              <li
                className="hover:bg-gray-300 rounded-lg dark:border-b dark:border-b-black dark:rounded-none"
                onClick={() => setMode("light")}
              >
                <a className="text-black hover:text-black">Light</a>
              </li>
              <li
                className="hover:bg-gray-300 rounded-lg"
                onClick={() => setMode("dark")}
              >
                <a className="text-black hover:text-black">Dark</a>
              </li>
            </ul>
          </div>

          {/* <div className="sm:mr-12 mr-8 border border-gray-400 py-4 px-3 max-w-[140px] cursor-pointer uppercase font-bold font-sans text-sm dark:text-white">
            Contact Now
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
