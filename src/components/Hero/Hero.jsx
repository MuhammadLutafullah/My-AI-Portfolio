import "../../App.css";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

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
                href="https://drive.google.com/file/d/1U_RrHL5ca03q757VH7KCLZ_VB3Bhjk5U/view?usp=drivesdk"
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
            <style>
              {`
                @keyframes spin-slow { 100% { transform: rotate(360deg); } }
                @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                @keyframes pulse-ring {
                  0% { transform: scale(0.85); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2); }
                  70% { transform: scale(1); box-shadow: 0 0 0 30px rgba(0, 0, 0, 0); }
                  100% { transform: scale(0.85); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
                }
                .anim-circle-1 {
                  position: absolute; inset: 8%; border-radius: 50%;
                  border: 2px dashed rgba(0, 0, 0, 0.5);
                  animation: spin-slow 20s linear infinite;
                }
                .anim-circle-2 {
                  position: absolute; inset: 18%; border-radius: 50%;
                  border: 3px solid rgba(0, 0, 0, 0.1); border-top-color: #000; border-bottom-color: #000;
                  animation: spin-reverse 12s linear infinite;
                }
                .anim-circle-3 {
                  position: absolute; inset: 28%; border-radius: 50%;
                  border: 1px dotted rgba(0, 0, 0, 0.8);
                  animation: spin-slow 25s linear infinite;
                }
                .anim-center-core {
                  width: 28%; height: 28%; background: #000; border-radius: 50%;
                  animation: pulse-ring 3s ease-in-out infinite;
                  display: flex; justify-content: center; align-items: center;
                  color: #fff; font-weight: 900; font-size: clamp(20px, 4vw, 42px);
                  letter-spacing: 2px; box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
                  z-index: 10;
                }
              `}
            </style>
            <div className="hero-img bg-transparent rounded-full w-[550px] h-[550px] max-md:w-[421px] max-md:h-[421px] max-sm:!w-[200px] max-sm:!h-[200px] flex justify-center items-center relative overflow-hidden">
              <div className="anim-circle-1"></div>
              <div className="anim-circle-2"></div>
              <div className="anim-circle-3"></div>
              <div className="anim-center-core">AI</div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;