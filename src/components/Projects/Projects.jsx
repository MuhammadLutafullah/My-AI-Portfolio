import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import "./Projects.css";
import mursImg from "../../images/murs-preview-img.webp";
import ethixImg from "../../images/ethix-preview-img.webp";
import rageImg from "../../images/rage-preview-img.webp";
import comingSoon from "../../images/Coming-soon.jpg";
import img1 from "../../images/1.png";
import img2 from "../../images/4.png";
import img3 from "../../images/5.png";
import img4 from "../../images/6.png";
import img5 from "../../images/7.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTab, setActiveTab] = useState("frontend");

  const projects = [
    // FRONTEND PROJECTS
    {
      id: 1,
      title: "MURS Digital Artwork",
      description:
        "The main purpose of the MURS project is to sell digital artwork, providing a platform for artists to showcase and sell their creations to a global audience.",
      imgSrc: mursImg,
      liveLink: "https://nft-artwork-web.surge.sh/theme/index.html",
      tags: ["React", "NFT", "Web3", "Tailwind"],
      category: "frontend",
    },
    {
      id: 2,
      title: "Ethix – NFT Marketplace",
      description:
        "The Ethix project is a platform for NFT artwork, where users can participate in live auctions. Artists showcase their creations, and buyers engage in real-time bidding for unique NFTs.",
      imgSrc: ethixImg,
      liveLink: "https://ethix-nftmarketplace.surge.sh/theme/index.html",
      tags: ["React", "NFT", "Auction", "Socket.io"],
      category: "frontend",
    },
    {
      id: 3,
      title: "RAGE – Gaming Project",
      description:
        "Rage is a live-stream platform for gamers to watch streams and track player rankings. It offers real-time updates for an immersive gaming experience.",
      imgSrc: rageImg,
      liveLink: "https://livestream-gamingwebsite.surge.sh/theme/index.html",
      tags: ["React", "Gaming", "Streaming", "WebRTC"],
      category: "frontend",
    },
    {
      id: 4,
      title: "I2P",
      description:
        "Develop a web portal for automating the invoice payment cycle, integrating with SAP for vendors and internal users, ensuring seamless creation, review, and processing. It is Internal invoice automation portal.",
      imgSrc: img1,
      liveLink: "https://i2p2.frieslandcampina.com.pk/#/login",
      tags: ["React", "SAP", "Enterprise", "Redux"],
      category: "frontend",
    },
    {
      id: 5,
      title: "500 Land",
      description:
        "Developed the user interface for the 500 Land web application employing Next.js, Tailwind CSS, and SCSS to ensure a visually captivating and responsive user experience.",
      imgSrc: img2,
      liveLink: "https://500.land/",
      tags: ["Next.js", "Tailwind", "SCSS", "Framer Motion"],
      category: "frontend",
    },
    {
      id: 6,
      title: "Invoice Mate",
      description:
        "As a React JS Developer for InvoiceMate, I worked on Dashboard, Invoicing, Book-keeping, and Settings modules, delivering responsive UI, quality web design, and translating designs into high-quality code.",
      imgSrc: img3,
      liveLink:
        "https://beta.invoicemate.net/auth/jwt/login?returnTo=%2Fdashboard",
      tags: ["React", "Dashboard", "Chart.js", "MUI"],
      category: "frontend",
    },
    {
      id: 7,
      title: "Skyy Go",
      description:
        "SkyyGo is a platform where users can search for flights from or toward their destination, compare prices, and book tickets effortlessly. It ensures secure and seamless payment options, making travel planning smooth and hassle-free.",
      imgSrc: img4,
      liveLink: "https://www.skyygo.com/development",
      tags: ["React", "Travel", "API Integration", "Payment"],
      category: "frontend",
    },
    {
      id: 8,
      title: "Gaming Character",
      description:
        "Gamming Character is a React-based platform where users sell gaming artwork via a user dashboard, while an admin dashboard monitors activities.",
      imgSrc: img5,
      liveLink: "https://gamming-charecter.vercel.app/",
      tags: ["React", "Dashboard", "Admin Panel", "Firebase"],
      category: "frontend",
    },
    
    // AI PROJECTS
    {
      id: 9,
      title: "AI-Powered Healthcare Diagnostic System",
      description:
        "An advanced AI system that analyzes medical images and patient data to provide accurate diagnostic recommendations. Uses deep learning algorithms trained on millions of medical records.",
      imgSrc: "https://via.placeholder.com/400x300/f0f0f0/000000?text=Healthcare+AI",
      liveLink: "https://healthcare-ai-demo.vercel.app",
      tags: ["AI", "Deep Learning", "Healthcare", "Python"],
      category: "ai",
    },
    {
      id: 10,
      title: "Autonomous Drone Navigation System",
      description:
        "Computer vision-based autonomous drone system for real-time obstacle avoidance and path planning. Implements reinforcement learning algorithms for efficient navigation.",
      imgSrc: "https://via.placeholder.com/400x300/f0f0f0/000000?text=Drone+AI",
      liveLink: "https://drone-ai-demo.vercel.app",
      tags: ["AI", "Computer Vision", "Robotics", "Reinforcement Learning"],
      category: "ai",
    },
    {
      id: 11,
      title: "Predictive Maintenance System",
      description:
        "IoT-based predictive maintenance system using machine learning to predict equipment failures before they occur. Reduces downtime by 40% and maintenance costs by 25%.",
      imgSrc: "https://via.placeholder.com/400x300/f0f0f0/000000?text=Predictive+AI",
      liveLink: "https://predictive-demo.vercel.app",
      tags: ["AI", "IoT", "Predictive Analytics", "Machine Learning"],
      category: "ai",
    },
    {
      id: 12,
      title: "Natural Language Processing Chatbot",
      description:
        "Intelligent chatbot powered by NLP that understands context, sentiment, and provides human-like responses. Integrated with multiple platforms for seamless customer support.",
      imgSrc: "https://via.placeholder.com/400x300/f0f0f0/000000?text=NLP+Chatbot",
      liveLink: "https://nlp-chatbot-demo.vercel.app",
      tags: ["AI", "NLP", "Chatbot", "Transformers"],
      category: "ai",
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  // Tab configuration
  const tabs = [
    { id: "frontend", label: "Frontend Projects", icon: "💻" },
    { id: "ai", label: "AI Projects", icon: "🤖" }
  ];

  return (
    <>
      <div className="pt-[96px] max-sm:pt-[40px] bg-white">
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="text-center">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
              <span className="text-black text-sm font-semibold uppercase tracking-wider">
                My Work
              </span>
            </div>

            <p className="hero-heading font-bold text-[40px] leading-[50px] max-md:text-[27px] max-md:leading-[37px] text-black">
              My Portfolio
            </p>
            <p className="parallex-desc py-[27px] max-md:py-[15px] font-medium text-[18px] leading-[27px] text-gray-600 max-xxsm:text-[16px] max-w-4xl mx-auto">
              All my work is showcased below. Click on "Live Preview" to explore
              my projects. These projects are built using technologies like
              React, Next.js, Tailwind CSS, Bootstrap, Daisy UI, MUI, Framer
              Motion, Tilt.js, and SCSS for frontend, while AI projects leverage
              cutting-edge machine learning and deep learning technologies.
            </p>
          </div>

          {/* Two Tab Navigation - Box shadow removed */}
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-3 rounded-full font-semibold transition-all duration-300 text-base md:text-lg ${
                  activeTab === tab.id
                    ? "bg-black text-white scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black hover:scale-105"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </span>
                
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid - Three Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group w-full transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className="h-full flex flex-col justify-between p-6 bg-white rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:border-transparent relative overflow-hidden"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                >
                  
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
                  
                  {/* Category Badge - Black & White */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                      project.category === "ai" 
                        ? "bg-gray-100 text-gray-700 border-gray-300" 
                        : "bg-gray-100 text-gray-700 border-gray-300"
                    }`}>
                      {project.category === "ai" ? "🤖 AI Project" : "💻 Frontend"}
                    </span>
                  </div>

                  <div className="relative z-0">
                    <Tilt
                      className="parallax-effect rounded-xl overflow-hidden"
                      perspective={1100}
                      glareEnable={true}
                      glareMaxOpacity={0.15}
                      scale={1.02}
                      tiltMaxAngleX={5}
                      tiltMaxAngleY={5}
                      transitionSpeed={2000}
                    >
                      <div className="relative">
                        <img
                          className="rounded-xl h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={project.imgSrc}
                          alt={project.title}
                        />
                        {/* Overlay gradient on image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </div>
                    </Tilt>
                    
                    <p className="text-black text-[22px] font-bold leading-[30px] pt-4 pb-2 transition-colors group-hover:text-gray-700">
                      {project.title}
                    </p>
                    
                    <p className="text-gray-600 text-[14px] font-normal leading-[26px] pb-3 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Tags - Black & White */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pb-4">
                        {project.tags.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 group-hover:bg-gray-200 group-hover:text-black transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons - Black & White Theme */}
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden cursor-pointer text-[15px] font-semibold leading-[30px] text-white py-2.5 px-6 rounded-xl bg-black hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-gray-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Live Preview</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </a>
                    
                    {/* GitHub Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-gray-700 hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for more updates!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;