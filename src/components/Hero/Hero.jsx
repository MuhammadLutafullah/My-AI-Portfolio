import "../../App.css";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import profileImg from "../../images/Profile-img.jpeg";

const Hero = () => {
  return (
    <div className="hero-otr pt-[96px] max-sm:pt-[40px]">
      <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
        <div className="hero-inr flex justify-between items-center gap-[40px] max-md:gap-[20px] max-md:pr-[23px] max-sm:flex-col-reverse max-sm:!pr-[0px]">
          <div className="hero-content max-w-[647px] max-sm:max-w-full max-sm:text-center">
            <p className="hero-heading font-bold font-normal text-[56px] leading-[66px] max-md:text-[37px] max-md:leading-[41px] max-xxsm:!text-[27px] max-xxsm:!leading-[31px]">
              Hello, I'm Muhammad Lutaf Ullah,{" "}
              <Typewriter
                options={{
                  strings: ["Junior AI Developer", "Frontend Developer", "RAG Chatbot Specialist", "React Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </p>

            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              Junior AI Developer with hands-on experience in building RAG-based chatbots, embeddings, and intelligent automation systems. Strong foundation in frontend development with React and modern UI tools, enabling seamless integration of AI-powered features into scalable web applications. Skilled in FastAPI, React, and modern web technologies.
            </p>
            <div className="action-otr flex max-sm:justify-center">
              <a
                href="https://drive.google.com/file/d/1gXYsCKmPistNJRR4nGJxoGbILrdgGYCt/view?usp=drivesdk"
                target="_blank"
                className="action-inr h-[50px] overflow-hidden  cursor-pointer text-[18px] max-xxsm:text-[15px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950"
              >
                <p className="btn-default-txt">Download CV</p>
                <p className="pt-[11px] btn-hover-txt">One Click Away</p>
              </a>
            </div>
          </div>
          <Tilt
            className="hero-img tilt-effect"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="bottom"
            gyroscope={true}
          >
            <img
              src={profileImg}
              alt="Muhammad Lutaf Ullah"
              className="hero-img bg-black rounded-full w-[550px] h-[550px] max-md:w-[421px] max-md:h-[421px] max-sm:!w-[200px] max-sm:!h-[200px] object-cover"
              style={{ objectPosition: "center 25%" }}
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;