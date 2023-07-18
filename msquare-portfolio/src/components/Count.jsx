import RecentlyWorkCart from "./RecentlyWorkCart";

const Count = () => {
  return (
    <div className="h-full">
      <div className=" max-w-full max-h-full md:mt-40 mt-28">
        <div className="relative w-[80%] m-auto md:max-w-[1600px] bg-gray-100 dark:bg-[#191919] h-[150px] p-20 rounded-t-3xl ">
          <div className="relative w-full -top-[140px] flex justify-evenly flex-wrap md:flex-nowrap md:gap-x-2">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="bg-white dark:bg-[#D4AF37] dark:border-none w-[190px] h-[120px] p-6 flex flex-col justify-around drop-shadow-xl border border-gray-200 rounded-2xl"
            >
              <p className="text-center font-bold font-sans text-2xl">3</p>
              <p className="text-center text-gray-400 dark:text-black font-sans font-semibold">
                Msquare Members
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="-top-[140px] bg-white dark:bg-[#D4AF37] dark:border-none w-[190px] h-[120px] p-6 flex flex-col justify-around drop-shadow-xl border border-gray-200 rounded-2xl mt-4 sm:mt-0"
            >
              <p className="text-center font-sans text-2xl font-bold">
                9{" "}
                <span className="text-[#D4AF37] dark:text-black text-3xl font-bold">
                  +
                </span>
              </p>
              <p className="text-center  text-gray-400 font-sans dark:text-black font-bold">
                Projects
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className=" -top-[140px] bg-white dark:bg-[#D4AF37] dark:border-none w-[190px] h-[120px] p-6 flex flex-col justify-around drop-shadow-xl border border-gray-200 rounded-2xl mt-4 md:mt-0"
            >
              <p className="text-center font-sans text-2xl font-bold">
                100{" "}
                <span className="text-[#D4AF37] dark:text-black text-3xl font-bold">
                  %
                </span>
              </p>
              <p className="text-center  text-gray-400 font-sans dark:text-black font-bold">
                Successful Percent
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className=" -top-[140px] bg-white dark:bg-[#D4AF37] dark:border-none w-[190px] h-[120px] p-6 flex flex-col justify-around drop-shadow-xl border border-gray-200 rounded-2xl  mt-4 md:mt-0"
            >
              <p className="text-center font-sans text-2xl font-bold">
                100{" "}
                <span className="text-[#D4AF37] dark:text-black text-3xl font-bold">
                  %
                </span>
              </p>
              <p className="text-center  text-gray-400 font-sans dark:text-black font-bold">
                Client Satisfication
              </p>
            </div>
          </div>
          {/* RecentlyWorkCart */}
        </div>
        <div className="">
          <RecentlyWorkCart />
        </div>
      </div>
    </div>
  );
};

export default Count;
