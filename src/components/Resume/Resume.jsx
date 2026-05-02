import "./Resume.css";
const Resume = () => {
  return (
    <>
      <div className="pt-[96px] max-sm:pt-[40px] pb-[32px] max-sm:pb-[0px]">
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="text-center ">
            <p className="hero-heading font-bold  text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px] ]">
              About Me
            </p>
            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
              In this section, you can explore my educational background and
              follow my journey as a front-end developer, from the early days of
              my career to where I am today. With years of experience and
              dedication, I have honed my skills in creating engaging and
              visually appealing digital experiences. My passion for innovation
              and problem-solving has been the driving force behind my
              continuous growth in the field. Thank you for taking the time to
              learn more about my professional journey.
            </p>
            <div className="flex justify-center items-center gap-[16px] pb-[27px] max-md:pb-[15px]">
              <div className="st-resume-heading flex items-center gap-[11px]">
                <img
                  className="w-[32px] h-[32px] object-contain max-xxsm:w-[24px] max-xxsm:h-[24px]"
                  src="https://devis-react.vercel.app/images/icon/resume-icon1.png"
                  alt="resume-icon"
                />
                <h2 className=" hero-heading font-bold  text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                  Education
                </h2>
              </div>
              <p className="font-bold  text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                &
              </p>
              <div className="st-resume-heading flex items-center gap-[11px]">
                <img
                  className="max-xxsm:w-[26px] max-xxsm:h-[26px] max-xxsm:object-contain"
                  src="https://devis-react.vercel.app/images/icon/resume-icon2.png"
                  alt="resume-icon"
                />
                <h2 className="font-bold  text-[31px] leading-[41px] max-md:text-[21px] max-md:leading-[27px]">
                  Experience
                </h2>
              </div>
            </div>
          </div>
          <div className="flex">
            {/* Education Section */}
            <div className="max-w-[75%] max-sm:max-w-full mx-auto">
              <div className="st-height-b0 st-height-lg-b50"></div>
              <div className="st-resume-wrap">
                {/* <div className="st-resume-heading flex items-center gap-[24px]">
                  <img
                    src="https://devis-react.vercel.app/images/icon/resume-icon1.png"
                    alt="resume-icon"
                  />
                  <h2 className=" hero-heading font-bold  text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px] ]">
                    Education
                  </h2>
                </div> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline-wrap">
                  {[
                    {
                      title: "Bachelor of Sciences in Information Technology",
                      duration: "2019 - 2023",
                      subtitle: "Government College University Faisalabad",
                    },
                    {
                      title: "Frontend Developer at Vistothemes",
                      duration: "2022 - 2024",
                      text: "At Vistothemes, my role was to deliver pixel-perfect designs tailored for mobile and tablet, crafting intricate layouts that seamlessly optimized user interactions. I focused on ensuring cross-platform compatibility while maintaining visual consistency across devices, contributing to smooth and engaging user experiences.",
                    },
                    {
                      title: "Frontend-React Developer at Technupur",
                      duration: "2024 - 2025",
                      text: "At Technupur, I developed engaging user interfaces using React and Next.js, focusing on UI logic and architecture to enhance the user experience. My role included API integration and implementing features like user and admin dashboards. I delivered efficient, scalable solutions aligned with project goals.",
                    },
                    {
                      title: "Junior AI Developer at CyberGen",
                      duration: "2025 - 2026",
                      text: "Developed intelligent chatbots using RAG (Retrieval-Augmented Generation) and agentic AI workflows, enabling accurate real-time responses. Integrated document search, embeddings, and automation tools to improve user experience and decision-making.",
                    },
                  ].map((item, index) => (
                    <div
                      className="st-resume-timeline max-sm:!mb-[14px]"
                      key={index}
                    >
                      <h3 className=" font-medium font-normal text-[24px] leading-[36px] text-[#000000] max-xxsm:text-[21px] max-xxsm:leading-[27px]">
                        {item.title}
                      </h3>
                      <div className=" font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                        {item.duration}
                      </div>
                      <h4 className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-xxsm:text-[16px]">
                        {item.subtitle}
                      </h4>
                      <div className="font-medium font-normal text-[18px] leading-[27px] text-[#555555] max-x">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="st-height-b100 st-height-lg-b80"></div>
            </div>

            {/* Experience Section */}
            {/* <div className="w-[50%]">
              <div className="st-height-b0 st-height-lg-b50"></div>
              <div className="st-resume-wrap">
                <div className="st-resume-heading">
                  <img
                    src="https://devis-react.vercel.app/images/icon/resume-icon2.png"
                    alt="resume-icon"
                  />
                  <h2 className="st-resume-heading-title">Experience</h2>
                </div>
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline-wrap">
                  {[
                    {
                      title: "Senior UX/UI Designer",
                      duration: "Jan 2020 - Present",
                      subtitle: "Bergnaum, Hills and Howe",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
                    },
                    {
                      title: "Product Designer",
                      duration: "Jan 2016 - December 2019",
                      subtitle: "Langosh, Sipes and Raynor",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
                    },
                    {
                      title: "UI/UX Designer",
                      duration: "Jan 2014 - December 2015",
                      subtitle: "Strosin, Maggio and Homenick",
                      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
                    },
                  ].map((item, index) => (
                    <div className="st-resume-timeline" key={index}>
                      <h3 className="st-resume-timeline-title">{item.title}</h3>
                      <div className="st-resume-timeline-duration">
                        {item.duration}
                      </div>
                      <h4 className="st-resume-timeline-subtitle">
                        {item.subtitle}
                      </h4>
                      <div className="st-resume-timeline-text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="st-height-b100 st-height-lg-b80"></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
