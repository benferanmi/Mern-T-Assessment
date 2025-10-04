import { BannerButton } from "./Button";
import img from "@/assets/images/image38.svg";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-first to-second py-2 sm:py-0 my-20 md:rounded flex justify-between items-center">
      <div className="ml-2 md:ml-24 gap-4 py-2 md:py-0 flex flex-col">
        <p className="text-white md:text-2xl font-semibold">Send funds</p>
        <p className="text-white md:text-lg font-normal">Remit taxes</p>
        <p className="text-white md:text-lg font-normal">Buy Utilities</p>
        <BannerButton
          title="Get Started"
          bgColor="bg-white"
          textColor="text-[#25a75c]"
        />
      </div>
      <div className="w-4/5">
        <img src={img} className="" />
      </div>
    </div>
  );
};

export default PromoBanner;
