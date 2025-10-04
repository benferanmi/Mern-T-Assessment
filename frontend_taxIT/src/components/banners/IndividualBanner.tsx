import img1 from "@/assets/images/Ellipse5.png";
import img2 from "@/assets/images/Ellipse4.png";
import img3 from "@/assets/images/Ellipse3.png";
import img4 from "@/assets/images/Ellipse1.png";
import img5 from "@/assets/images/Ellipse.png";
import img6 from "@/assets/images/Ellipse2.png";
import img7 from "@/assets/images/Ellipse22.png";
import { Button } from "../reuseable/Button";

const IndividualBanner = () => {
  return (
    <div className="flex flex-col md:flex-row h-[700px] ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-32 md:mt-0 md:items-start xl:ml-48 md:ml-10 gap-10">
        <h1 className="text-white text-center font-semibold text-[46px]  md:text-4xl md:text-left w-3/4 lg:w-[400px]">
          Secure & seamless online transactions
        </h1>
        <p className="text-white text-center md:text-left text-sm mx-2 sm:mx-0 md:text-base">
          Providing you with the best online payment experience
        </p>
        <div className="">
          <Button title="Create free account" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={img3}
          className="absolute w-40 sm:w-64 lg:w-96 mt-72 sm:mt-80 lg:mt-0 z-10 md:mt-0"
          alt="big woman image"
        />
        <img
          src={img1}
          className="absolute w-32 sm:w-40 lg:w-60 mt-[480px] md:mt-64 lg:ml-10 lg:mt-96 z-20"
          alt="man"
        />
        <img
          src={img2}
          className="absolute w-24 sm:w-36 z-10 mr-44 sm:mr-60 mt-60 sm:mt-60 lg:mb-96 lg:mr-96 lg:w-56 md:mb-96"
          alt="small woman image"
        />
        <img
          src={img4}
          className="absolute w-16 sm:w-20 md:w-36 lg:w-40 mt-80 sm:mt-96 lg:mt-[480px] mr-44 sm:mr-60 lg:mr-96 md:mb-96"
          alt="dark green circle"
        />
        <img
          src={img7}
          className="absolute w-20 sm:w-20 md:w-44 lg:w-44 mt-[340px] sm:mt-[400px] md:mt-[420px] lg:mt-[510px] mr-[170px] sm:mr-60 md:mr-56 lg:mr-96 md:mb-96"
          alt="dark green stripe"
        />
        <img
          src={img5}
          className="absolute z-20 w-16 sm:w-20 md:w-20 lg:w-20 mt-40 sm:mt-40 lg:mt-28 xl:mt-[80px] mr-20 sm:mr-20 lg:mr-48 md:mb-96"
          alt="brown circle"
        />
        <img
          src={img6}
          className="absolute w-20 sm:w-28 md:40 mt-80 md:mt-0 lg:mt-0 z-10 ml-40 sm:ml-60 lg:ml-[350px] mb-24"
          alt="lemon green stripe circle"
        />
      </div>
    </div>
  );
};

export default IndividualBanner;
