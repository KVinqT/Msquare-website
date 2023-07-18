import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TeamCart = ({ data }) => {
  const { name, position, imageLink, number, facebookLink, youTubeLink } = data;
  console.log(data);
  return (
    <div className="border-2 border-gray-300 dark:border-[#D4AF37] w-[275px] h-[400px] mb-4 relative overflow-hidden group transition rounded-2xl">
      <div className="w-full h-full">
        <div className="w-full mx-auto flex justify-center items-center overflow-hidden">
          <img
            src={imageLink}
            alt=""
            className="md:max-h-[250px] max-h-[250px] md:w-[305px] w-[300px] group-hover:scale-110 duration-300 object-cover"
          />
        </div>
        <div className="cursor-pointer">
          <p className="dark:text-white text-xl font-semibold font-sans text-center mt-2">
            {name}
          </p>
          <p className="text-gray-400 font-sans font-semibold text-center">
            {position}
          </p>
          <p className="text-center mt-4 font-sans font-bold text-[#D4AF37]">
            {number}
          </p>
        </div>
      </div>
      <div className="gap-y-3 absolute top-0 md:-right-14 p-2 gap-1 flex flex-col group-hover:right-0 right-0 transition-all duration-300">
        <button>
          <a
            href={facebookLink}
            className="flex justify-center items-center text-white w-10 h-10 bg-[#D4AF37] dark:bg-black rounded-full"
          >
            <FaFacebookF className="text-2xl" />
          </a>
        </button>
        <div className="flex justify-center items-center text-white w-10 h-10 bg-[#D4AF37] dark:bg-black rounded-full">
          <FaInstagram className="text-2xl" />
        </div>
        <a
          href={youTubeLink}
          className="flex justify-center items-center text-white w-10 h-10 bg-[#D4AF37] dark:bg-black rounded-full"
        >
          <FaYoutube className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default TeamCart;
