import "./Resume.css";

const Resume = () => {
  return (
    <>
      <div className="pt-[96px] max-sm:pt-[40px] pb-[32px] max-sm:pb-[0px]">
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="text-center ">
            <p className="hero-heading font-bold text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px]">
              About Me
            </p>
            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              Junior AI Developer with hands-on experience in building RAG-based chatbots, embeddings, and intelligent automation systems. 
              Strong foundation in frontend development with React and modern UI tools. Skilled in FastAPI, React.js, Next.js, and modern web technologies. 
              Passionate about creating innovative AI solutions and pixel-perfect web applications.
            </p>
            <div className="flex justify-center items-center gap-[16px] pb-[27px] max-md:pb-[15px]">
              <div className="st-resume-heading flex items-center gap-[11px]">
                <img
                  className="w-[32px] h-[32px] object-contain max-xxsm:w-[24px] max-xxsm:h-[24px]"
                  src="https://devis-react.vercel.app/images/icon/resume-icon1.png"
                  alt="resume-icon"
                />
                <h2 className="hero-heading font-bold text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                  Education
                </h2>
              </div>
              <p className="font-bold text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                &
              </p>
              <div className="st-resume-heading flex items-center gap-[11px]">
                <img
                  className="max-xxsm:w-[26px] max-xxsm:h-[26px] max-xxsm:object-contain"
                  src="https://devis-react.vercel.app/images/icon/resume-icon2.png"
                  alt="resume-icon"
                />
                <h2 className="font-bold text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                  Experience
                </h2>
              </div>
            </div>
          </div>
          <div className="flex">
            {/* Education & Experience Section */}
            <div className="max-w-[75%] max-sm:max-w-full mx-auto">
              <div className="st-height-b0 st-height-lg-b50"></div>
              <div className="st-resume-wrap">
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline-wrap">
                  {/* Education */}
                  <div className="st-resume-timeline max-sm:!mb-[14px]">
                    <h3 className="font-medium font-normal text-[24px] leading-[36px] text-[#000000] max-xxsm:text-[21px] max-xxsm:leading-[27px]">
                      Bachelor of Sciences in Information Technology
                    </h3>
                    <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      2019 - 2023
                    </div>
                    <h4 className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      Government College University Faisalabad
                    </h4>
                  </div>

                  {/* Frontend Developer Experience */}
                  <div className="st-resume-timeline max-sm:!mb-[14px]">
                    <h3 className="font-medium font-normal text-[24px] leading-[36px] text-[#000000] max-xxsm:text-[21px] max-xxsm:leading-[27px]">
                      Frontend Developer
                    </h3>
                    <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      04/2022 – 10/2023
                    </div>
                    <h4 className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      Technupur - Faisalabad, Pakistan
                    </h4>
                    <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555]">
                      <p>
                        • Developed responsive websites using HTML, CSS, Tailwind, and JavaScript<br/>
                        • Converted UI/UX designs into pixel-perfect interfaces<br/>
                        • Built admin dashboards using React & Next.js<br/>
                        • Integrated APIs and handled CRUD operations<br/>
                        • Followed component-based architecture for scalability
                      </p>
                    </div>
                  </div>

                  {/* Junior AI Developer Experience */}
                  <div className="st-resume-timeline max-sm:!mb-[14px]">
                    <h3 className="font-medium font-normal text-[24px] leading-[36px] text-[#000000] max-xxsm:text-[21px] max-xxsm:leading-[27px]">
                      Junior AI Developer
                    </h3>
                    <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      05/2025 – Present
                    </div>
                    <h4 className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                      Vistothemes (AI Division) - Faisalabad, Pakistan
                    </h4>
                    <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555]">
                      <p>
                        • Developed RAG-based chatbots for accurate, context-aware responses<br/>
                        • Integrated embeddings and document search for intelligent data retrieval<br/>
                        • Built APIs using FastAPI for AI model interaction<br/>
                        • Designed automation workflows to improve user decision-making
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="st-height-b100 st-height-lg-b80"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;