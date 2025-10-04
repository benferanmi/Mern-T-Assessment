import img from "@/assets/images/leftPanel.png";
import appleStoreImage from "@/assets/images/Group.png";
import gooplePlayImage from "@/assets/images/googleplay.png";
import { BannerButton } from "./Button";

const AppDownloadSection = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-0 xl:gap-8">
      <div className="w-full sm:w-1/2">
        <img src={img} />
      </div>
      <div className="w-full flex flex-col items-center sm:items-start sm:w-1/2 xl:w-1/3 mt-5 sm:mt-0 px-2 sm:px-0 ml-0 sm:pl-4">
        <h1 className="text-base lg:text-3xl md:text-2xl">
          Transact on the go
        </h1>
        <p className="text-sm md:text-base text-stonecold mt-2 mb-8">
          Stay on top of your business with our easy-to-use app
        </p>
        <div>
          <BannerButton
            title="Get Started"
            bgColor="bg-gradient-to-r from-first to-second"
            textColor="text-white"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-2 ">
          <img src={appleStoreImage} className="w-24" />
          <img src={gooplePlayImage} className="w-24" />
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
