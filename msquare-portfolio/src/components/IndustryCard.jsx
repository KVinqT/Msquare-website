import { datas } from "../utlis/data";
const IndustryCard = () => {
  return (
    <div>
      <div className="mt-12 max-w-full sm:flex sm:flex-wrap sm:justify-evenly mb-16 gap-x-6">
        {datas.map((data, index) => (
          <div
            key={index}
            className="bg-white m-auto dark:bg-[#D4AF37] rounded-3xl max-h-[300px] max-w-[330px] sm:w-[40%] sm:max-h-[450px] lg:w-[30%] lg:h-[350px] p-6 mt-9 shadow-xl hover:scale-110 dark:border-none border-t duration-300"
          >
            {/* <p className="rounded-full w-[50px] h-[50px] bg-MidnightNavy"></p> */}
            <img
              src={data.image}
              alt=""
              //   w-[215px] h-full lg:ml-3
              className="w-[50px]"
            />
            <p className="text-[#191919] font-sans w-[100%] mt-4 font-semibold sm:text-2xl text-xl">
              {data.label}
            </p>
            <p
              className="text-[#191919] w-[100%] font-sans mt-6 text-md"
              id="process"
            >
              {data.description}
            </p>
            {index === 6 ? <div id="process"></div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCard;
