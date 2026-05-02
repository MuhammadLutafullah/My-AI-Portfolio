import React, { useState, useEffect } from "react";
import logo from "../../images/Muhammad - Logo.svg";

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onPortfolioClick,
  onContactClick,
  onWhyClick,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("about");
    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Toggle the offcanvas menu
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  // Handle scroll event to fix navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = (navigationFn) => {
    navigationFn();
    toggleOffcanvas();
  };

  return (
    <>
      <div
        className={`nav-otr border border-[#e5e5e5] transition-all duration-500 ${
          isFixed
            ? "fixed top-0 left-0 w-full z-50 bg-[#fffc] backdrop-blur-[10px] shadow-md"
            : ""
        }`}
        style={{ transitionProperty: "top, box-shadow, background-color" }}
      >
        <div className="custom-container mx-auto max-w-[1440px] px-[20px]">
          <div className="nav-inr flex justify-between items-center">
            <div onClick={onHomeClick} className="logo-otr max-sm:py-[11px]">
              <img
                className="logo-inr w-[70px] h-[70px] cursor-pointer rounded-full max-sm:w-[50px] max-sm:h-[50px]"
                src={logo}
                alt="Logo"
              />
            </div>

            <div className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] cursor-pointer max-sm:flex hidden bg-[#555555] rounded-full  justify-center items-center">
              <button
                className="offcanvas-toggle text-[18px] font-medium"
                onClick={toggleOffcanvas}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                  className="w-[16px] h-[16px]"
                >
                  <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              </button>
            </div>

            <ul className="nav-ul max-sm:hidden flex gap-[40px]">
              <li className="nav-li">
                <a
                  onClick={onHomeClick}
                  className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="nav-li">
                <a
                  onClick={onAboutClick}
                  className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer"
                >
                  About
                </a>
              </li>
              <li className="nav-li">
                <a
                  onClick={onWhyClick}
                  className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer"
                >
                  Why Me
                </a>
              </li>
              <li className="nav-li">
                <a
                  onClick={onPortfolioClick}
                  className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-li">
                <a
                  onClick={onContactClick}
                  className="font-medium font-normal text-[18px] leading-[86px] cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="action-otr max-sm:hidden block">
              <a
                href="https://wa.me/923027899450"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="action-inr h-[50px] overflow-hidden cursor-pointer text-[18px] font-medium font-normal leading-[30px] text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950">
                  <p className="btn-default-txt">Hire Me</p>
                  <p className="pt-[11px] btn-hover-txt">Let's Talk</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas-menu fixed top-0 right-0 h-full w-[300px] z-[99] bg-white shadow-lg transform transition-transform ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-3">
          <img
            onClick={() => handleMobileNav(onHomeClick)}
            className="logo-inr w-[70px] h-[70px] rounded-full max-sm:w-[50px] max-sm:h-[50px]"
            src={logo}
            alt="Logo"
          />
          <button
            className="offcanvas-close  text-[18px] font-medium"
            onClick={toggleOffcanvas}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[24px] h-[24px]"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </div>
        <ul className="p-4">
          <li onClick={() => handleMobileNav(onHomeClick)} className="mb-4">
            <a
              onClick={onHomeClick}
              className="text-[18px] font-medium cursor-pointer"
            >
              Home
            </a>
          </li>
          <li onClick={() => handleMobileNav(onAboutClick)} className="mb-4">
            <a
              onClick={onAboutClick}
              className="text-[18px] font-medium cursor-pointer"
            >
              About
            </a>
          </li>
          <li onClick={() => handleMobileNav(onWhyClick)} className="mb-4">
            <a
              onClick={onWhyClick}
              className="text-[18px] font-medium cursor-pointer"
            >
              Why Me
            </a>
          </li>
          <li
            onClick={() => handleMobileNav(onPortfolioClick)}
            className="mb-4"
          >
            <a
              onClick={onPortfolioClick}
              className="text-[18px] font-medium cursor-pointer"
            >
              Portfolio
            </a>
          </li>
          <li onClick={() => handleMobileNav(onContactClick)} className="mb-4">
            <a
              onClick={onContactClick}
              className="text-[18px] font-medium cursor-pointer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/923027899450" // Link to your WhatsApp number
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practices
            >
              <div className="cursor-pointer text-[18px] text-center font-medium text-white py-[10px] px-[24px] rounded-[8px] bg-slate-950">
                Hire Me
              </div>
            </a>
          </li>
        </ul>
      </div>

      {isOffcanvasOpen && (
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleOffcanvas}
        ></div>
      )}
    </>
  );
};

export default Navbar;
