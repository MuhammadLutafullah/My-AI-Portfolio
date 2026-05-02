// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import htmlImg from "../../images/html-5-svgrepo-com.svg";
import cssImg from "../../images/css-3-svgrepo-com.svg";
import bootstrapImg from "../../images/bootstrap-4-logo-svgrepo-com.svg";
import tailwindImg from "../../images/tailwind-svgrepo-com.svg";
import javascriptImg from "../../images/javascript-svgrepo-com.svg";
import jqueryImg from "../../images/jquery-svgrepo-com.svg";
import ReactImg from "../../images/react-svgrepo-com.svg";
import muiImg from "../../images/material-ui-svgrepo-com.svg";
import sassImg from "../../images/sass-svgrepo-com.svg";
// Import Swiper styles
import "swiper/css";

// Import required modules
import { Autoplay } from "swiper/modules";

const StackSlider = () => {
  const images = [
    htmlImg,
    cssImg,
    bootstrapImg,
    tailwindImg,
    javascriptImg,
    jqueryImg,
    ReactImg,
    muiImg,
    sassImg,
  ];

  return (
    <>
      <div className="pt-[96px] max-sm:pt-[40px]">
        <div className="bg-black py-[21px]">
          <Swiper
            slidesPerView={5} // Set the number of visible slides
            spaceBetween={0} // Remove space between slides
            centeredSlides={false} // Don't center the slides
            loop={true} // Enable loop
            autoplay={{
              delay: 0, // No delay for continuous movement
              disableOnInteraction: false, // Continue autoplay on interaction
            }}
            speed={4500} // Speed of the continuous scroll
            loopAdditionalSlides={10} // Load extra slides for continuous loop
            modules={[Autoplay]} // Only Autoplay module needed
            className="mySwiper"
          >
            {images.concat(images).map(
              (
                image,
                index // Concatenate images for continuous effect
              ) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-[90px] h-[90px] max-sm:w-[55px] max-sm:h-[55px] max-xxsm:!w-[40px] max-xxsm:!h-[40px]"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default StackSlider;
