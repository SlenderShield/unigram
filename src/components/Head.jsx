import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Banner from "../assets/fwdserviceicon/Banner.png"
function Head() {
  return (
    <Carousel
      autoplay
      autoplayDelay={5000}
      transition={{ duration: 2 }}
      ease="easeInOut"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      className=" max-w-screen overflow-hidden relative w-full h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >


      <div className="relative h-full w-full">
        <img
          src={Banner}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center ">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="black"
              className="mb-2 md:mb-4 opacity-80 text-md md:text-xl lg:text-2xl font-semibold"
            >
              Let's build our
            </Typography>
            <Typography
              variant="lead"
              className="text-[#ECB602] mb-2 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Gram Swaraj
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-2 md:mb-4 opacity-80 text-md md:text-xl lg:text-2xl font-semibold"
            >
              System together
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="lg:mb-8 mb-2 opacity-80 text-md md:text-lg lg:text-xl uppercase font-light tracking-[3px] md:tracking-[5px] lg:tracking-[8px]"
            >
              Unique and strong
            </Typography>
            <Button className="bg-[#ECB602] tracking-[3px] md:tracking-[8px]">
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Banner}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="black"
              className="mb-2 md:mb-4 opacity-80 text-md md:text-xl lg:text-2xl font-semibold"
            >
              Let's build our
            </Typography>
            <Typography
              variant="lead"
              className="text-[#ECB602] mb-2 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Gram Swaraj
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-2 md:mb-4 opacity-80 text-md md:text-xl lg:text-2xl font-semibold"
            >
              System together
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="lg:mb-8 mb-2 opacity-80 text-md md:text-lg lg:text-xl uppercase font-light tracking-[3px] md:tracking-[5px] lg:tracking-[8px]"
            >
              Unique and strong
            </Typography>
            <Button className="bg-[#ECB602] tracking-[3px] md:tracking-[8px]">
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
      </div>

    </Carousel>
  );
}
export default Head;