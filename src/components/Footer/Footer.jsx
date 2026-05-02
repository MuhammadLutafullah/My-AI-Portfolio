import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-3 gap-[9px]">
          {/* Logo or Name */}
          <div className="font-regular text-[21px] leading-[25px] text-white">
            Muhammad LutafUllah
          </div>
          {/* Navigation Links */}
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/MuhammadLutafullah"
                target="_blank"
                className="font-regular text-[17px] leading-[25px] text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                className="font-regular text-[17px] leading-[25px] text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-[#555555] my-2"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="font-regular text-[17px] leading-[25px] text-[#555555] max-xxsm:text-center">
            &copy; {new Date().getFullYear()} Muhammad LutafUllah. All rights
            reserved.
          </p>
          {/* Social Icons */}
          {/* <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-[17px] leading-[25px] text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="font-regular text-[17px] leading-[25px] text-white"
            >
              LinkedIn
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
