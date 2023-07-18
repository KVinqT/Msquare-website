import { recentlyWorkData } from "../utlis/data";

const RecentlyWorkCart = () => {
  return (
    <div className="max-w-[80%] m-auto rounded-b-3xl bg-gray-100 dark:bg-[#191919] mt-">
      <div
        className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center"
        data-aos="fade-up"
      >
        <h1 className="text-black dark:text-white md:m-0 sm:pt-32 pt-[400px] md:pt-0">
          Our Recent<span className="text-[#D4AF37]"> Work</span>
        </h1>
      </div>
      <div className="mt-24 md:flex md:flex-wrap lg:justify-evenly md:justify-around justify-center m-auto gap-4">
        {recentlyWorkData.map((data, index) => (
          <div
            key={index}
            className=" overflow-hidden mt-16 max-w-[250px] sm:max-w-[300px] hover:-translate-y-4 duration-300 ease-in-out m-auto md:m-0 pb-8"
          >
            <img
              src={data.image}
              alt=""
              className="dark:border-2 border-[#D4AF37] dark:rounded-3xl"
            />
            <h1 className="font-bold text-2xl text-MidnightNavy mt-4 dark:text-[#D4AF37]">
              {data.title}
            </h1>
            <p className="text-lg mt-4 dark:text-[#D4AF37]">
              <span className="dark:text-white">Website</span> -{" "}
              {data.websiteName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyWorkCart;
