import "../../App.css";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import heroImg from "../../images/updated-img.png";

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
                  strings: ["Frontend Developer","Junior AI Developer","React Developer",],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </p>

            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              I use parallax animation on my hero image and specialize in
              turning ideas into reality. With 4 years of pure experience as a
              frontend developer, I am skilled in customizing and editing
              Next.js and React libraries to create pixel-perfect, fully
              responsive websites. My past projects showcase seamless
              adaptability and exceptional performance across all devices.
            </p>
            <div className="action-otr flex max-sm:justify-center">
              <a
                href="https://drive.google.com/file/d/1-Ud0CoSuL7dFmUN2oGKx7NolL88pjb7y/view?usp=drivesdk"
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
            <div className="hero-img bg-black rounded-full overflow-hidden w-[550px] h-[550px] max-md:w-[421px] max-md:h-[421px] max-sm:!w-[200px] max-sm:!h-[200px] flex justify-center items-center">
              <img
                className="max-md:w-full max-md:h-full object-contain w-[500px]  h-[500px]"
                src={heroImg}
                alt="dev-img"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
