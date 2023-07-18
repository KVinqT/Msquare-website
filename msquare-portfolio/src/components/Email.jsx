import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_semj91m",
        "template_01u0c2c",
        ref.current,
        "aSFXqQOkOrKHRY5KC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
    console.log(ref.current);
  };
  return (
    <div className="mt-8 md:mt-0 md:max-w-full lg:w-[500px] m-auto">
      <div className="max-w-[80%] flex flex-col m-auto lg:mt-0 mt-16">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-md font-sans font-bold dark:text-white"
        >
          EMAIL
        </p>
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-[40px] font-sans font-bold dark:text-white"
        >
          Implement Your <span className="text-[#D4AF37]">Project</span>
        </h1>
        <form onSubmit={handleSubmit} ref={ref}>
          <div className="mt-6">
            <p className="font-sans font-semibold text-[#D4AF37]">
              Company's Name
            </p>
            <div data-aos="fade-left" data-aos-duration="1000" className="mt-3">
              <input
                type="text"
                name="name"
                placeholder="Type Company's Name"
                className="input border-black border-2 w-full max-w-[500px] bg-white dark:border-[#D4AF37]"
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-sans font-semibold text-[#D4AF37]">Email</p>
            <div className="mt-3" data-aos="fade-left" data-aos-duration="1000">
              <input
                type="email"
                name="email"
                placeholder="Type Email"
                className="input border-black border-2 w-full max-w-[500px] bg-white dark:border-[#D4AF37]"
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-sans font-semibold text-[#D4AF37]">Message</p>
            <div className="mt-3" data-aos="fade-left" data-aos-duration="1000">
              <textarea
                placeholder="Bio"
                name="message"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-white border-2 border-black dark:border-[#D4AF37]"
              ></textarea>
            </div>
          </div>
          <div className="w-full rounded-xl text-xl flex justify-center items-center font-semibold mt-6 bg-[#191919] text-[#D4AF37] h-[60px] dark:bg-[#191919] dark:text-[#D4AF37] dark:border-[#D4AF37] dark:border duration-300 font-sans text-md cursor-pointer hover:border hover:border-[#D4AF37] hover:bg-white mr-4">
            <button className="" type="submit">
              Send Email
            </button>
          </div>
          <div className="dark:text-[#D4AF37] text-center mt-2">
            {success && "Your Message was successfully sent!"}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Email;
