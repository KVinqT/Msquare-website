import aboutus from "../assets/photos/aboutus.png";
import TeamCart from "../components/TeamCart";
import { msquareMembers } from "../utlis/data";
import facebookpage from "../assets/photos/facebookpage.png";

const About = () => {
  return (
    <div className="h-full snap-center" id="about">
      <div className="max-w-full max-h-full md:mt-20 mt-12 ">
        <div className="w-[80%] m-auto md:max-w-[1600px]">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:text-4xl sm:text-3xl text-4xl font-sans font-bold dark:text-white"
          >
            We Can <span className="text-[#D4AF37]">Support</span>
          </div>
          <div>
            <div className="flex flex-wrap xl:flex-nowrap mt-20 lg:justify-evenly bg-gray-100 dark:bg-[#8d7527] dark:text-white rounded-t-3xl shadow-lg">
              <div className="md:max-w-[450px] md:m-auto sm:max-w-full max-w-full max-h-full lg:m-10 sm:m-4 m-6 md:mt-6">
                <h1 className=" text-4xl font-sans font-bold md:text-center lg:text-left">
                  Attractive
                </h1>
                <p className="lg:text-xl sm:text-xl text-lg text-gray-600 dark:text-black font-sans font-semibold mt-6">
                  Show your brand in the best possible light. And it’s not just
                  about looks. Your brand’s digital display will look good and
                  be efficient. Show your brand in a way you love.
                </p>
              </div>
              <div className="md:max-w-[450px] md:m-auto sm:max-w-full max-w-full max-h-full lg:m-10 sm:m-4 m-6 md:mt-6">
                <h1 className="text-4xl font-sans font-bold md:text-center lg:text-left">
                  Responsive
                </h1>
                <p className="lg:text-xl sm:text-xl text-lg text-gray-600 dark:text-black font-sans font-semibold mt-6">
                  Present an app or website design that is fast, well connected
                  and convenient to navigate. Your bounce rate should be as low
                  as possible, and this can only be achieved with good UX and UI
                  design.
                </p>
              </div>
              <div className="md:max-w-[450px] md:m-auto sm:max-w-full max-w-full max-h-full lg:m-10 sm:m-4 m-6 md:mt-6 md:mb-8">
                <h1 className="text-4xl font-sans font-bold md:text-center lg:text-left">
                  Reliable
                </h1>
                <p className="lg:text-xl sm:text-xl text-lg text-gray-600 dark:text-black font-sans font-semibold mt-6">
                  Get results and worry less. Work with a team that is an
                  extension of your own. You can rely on us to deliver and
                  follow up on your digital solutions. We strive to get your
                  KPIs where you want them to be and more.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="lg:flex">
              <div className="lg:max-w-[50%]">
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="md:text-4xl sm:text-3xl text-2xl font-sans font-bold dark:text-white max-w-full"
                >
                  About <span className="text-[#D4AF37]">Msquare</span>
                </p>
                <h1
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="dark:text-white lg:text-2xl md:text-3xl text-xl font-sans font-semibold lg:max-w-[470px] md:max-w-[600px] lg:mt-14 md:mt-12 mt-8"
                >
                  An organization made up of highly qualified individuals
                  dedicated to provide the best IT services and solutions
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="dark:text-gray-400 font-medium mt-6 lg:text-md md:text-xl text-lg font-sans text-gray-600"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis eaque ad magni, sint delectus laudantium, rerum
                  illo ab maiores sunt enim, cupiditate iure praesentium soluta
                  corrupti esse ducimus voluptatibus quisquam, cupiditate iure
                  praesentium soluta corrupti esse ducimus voluptatibus
                  quisquam. cupiditate iure praesentium soluta corrupti esse
                  ducimus.
                </p>
              </div>
              {/* img */}
              <div
                data-aos-duration="1500"
                data-aos="fade-left"
                className="flex m-auto"
              >
                <div className="flex md:m-auto md:mt-4 lg:mt-0 m-auto mt-6">
                  <img
                    src={aboutus}
                    alt=""
                    className="sm:max-w-[500px] lg:max-w-[450px] lg:h-[350px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* TeamMember */}
          <div className="py-12 mt-8 border-b border-[#D4AF37]">
            <div className="mb-20">
              <h1
                data-aos="fade-up"
                data-aos-duration="2000"
                className="text-center md:text-4xl sm:text-3xl text-2xl font-sans font-bold dark:text-white max-w-full"
              >
                Our<span className="text-[#D4AF37]"> Members</span>
              </h1>
            </div>
            <div className="m-auto">
              <div className="flex justify-evenly flex-wrap">
                {msquareMembers.map((data, index) => {
                  return <TeamCart key={index} data={data} />;
                })}
              </div>
            </div>
          </div>{" "}
          {/*facebook */}
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-14 text-center md:text-4xl sm:text-3xl text-3xl font-sans font-bold dark:text-white max-w-full"
          >
            Our <span className="text-[#D4AF37]">FaceBook and YouTube</span>
          </h1>
          <div className="md:mt-16 mt-8 pb-12">
            <div className="lg:flex lg:flex-row-reverse">
              {/* img */}
              <div className="flex m-auto">
                <div className="flex md:m-auto md:mt-4 lg:mt-0 m-auto mt-14 shadow-xl rounded-3xl">
                  <img
                    src={facebookpage}
                    alt=""
                    className="max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[700px] lg:h-[450px] rounded-3xl"
                  />
                </div>
              </div>
              <div className="lg:max-w-[50%] mt-8">
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="md:text-4xl sm:text-3xl text-2xl font-sans font-bold dark:text-white max-w-full"
                >
                  Our <span className="text-[#D4AF37]"> FaceBook Page</span>
                </p>
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="dark:text-white lg:text-2xl md:text-3xl text-xl font-sans font-semibold lg:max-w-[470px] md:max-w-[600px] lg:mt-6 md:mt-10 mt-8"
                >
                  For new networks and divinig into the community for new
                  knowledges
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="dark:text-gray-400 font-medium mt-6 lg:text-md md:text-xl text-lg font-sans text-gray-600"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis eaque ad magni, sint delectus laudantium, rerum
                  illo ab maiores sunt enim, cupiditate iure praesentium soluta
                  corrupti esse ducimus voluptatibus quisquam, cupiditate iure
                  praesentium soluta corrupti esse ducimus voluptatibus
                  quisquam. cupiditate iure praesentium soluta corrupti esse
                  ducimus.
                </p>
                <a
                  href="https://m.facebook.com/groups/msquareprogramming/?ref=share&mibextid=S66gvF"
                  className="rounded-2xl text-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] w-[150px] h-[50px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-sans text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4"
                >
                  <button className="">Join Now</button>
                </a>
              </div>
            </div>
            {/* YouTube */}
            <div className="lg:flex mt-28 lg:justify-around">
              {/* img */}
              <div className="flex items-center justify-center">
                <iframe
                  className="rounded-3xl border-2 border-[#D4AF37]"
                  width="402"
                  height="350"
                  border="0"
                  src="https://www.youtube.com/embed/aoaYtDvu6NE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="lg:max-w-[50%] mt-8">
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="md:text-4xl sm:text-3xl text-2xl font-sans font-bold dark:text-white max-w-full"
                >
                  Our <span className="text-[#D4AF37]"> YouTube Channel</span>
                </p>
                <h1
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="dark:text-white lg:text-2xl md:text-3xl text-xl font-sans font-semibold lg:max-w-[470px] md:max-w-[600px] lg:mt-6 md:mt-10 mt-8"
                >
                  First Introduction Video of Msquare Programming in 2021
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="dark:text-gray-400 font-medium mt-6 lg:text-md md:text-xl text-lg font-sans text-gray-600"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis eaque ad magni, sint delectus laudantium, rerum
                  illo ab maiores sunt enim, cupiditate iure praesentium soluta
                  corrupti esse ducimus voluptatibus quisquam, cupiditate iure
                  praesentium soluta corrupti esse ducimus voluptatibus
                  quisquam. cupiditate iure praesentium soluta corrupti esse
                  ducimus.
                </p>
                <a
                  href="https://www.youtube.com/@MSquareProgramming/featured"
                  className="rounded-2xl text-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] w-[170px] h-[60px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-sans text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4"
                >
                  <button className="">View Channel</button>
                </a>
              </div>
            </div>
          </div>
          {/* bottomNav */}
          <div
            data-aos="fade-right"
            className="btm-nav z-10 rounded-full shadow-2xl bg-gray-200 flex btm-nav-lg h-[50px] dark:bg-[#D4AF37] w-[50px] md:left-[93%] md:top-[85%] sm:left-[90%] sm:top-[85%] left-[83%] top-[85%]"
          >
            <a href="#home" className="w-full">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </button>
            </a>

            {/* <button className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
