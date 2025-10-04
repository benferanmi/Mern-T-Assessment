import img from "@/assets/images/rightPanel.png";
import img2 from "@/assets/images/wallet.png";
import img3 from "@/assets/images/Ellipse12.png";
import img4 from "@/assets/images/Ellipse23.png";
import { useUserModeStore } from "../../store/userModeStore";
import { SingleStepData } from "../../types";
import { stepData } from "../../lib/stepData";

export const StepsSection = () => {
  const userMode = useUserModeStore((state) => state.userMode);

  return (
    <div className="mx-5 mt-20 flex flex-wrap items-center justify-center">
      {userMode === "individual" && (
        <>
          <div className="w-full md:w-1/2 flex">
            <div className="w-1 h-72 mr-4 bg-slate-400">
              <div className="bg-[#25A75c] h-14" />
            </div>
            <div>
              {stepData.slice(0, 4).map((step: SingleStepData) => (
                <div key={step.id} className="flex flex-col gap-2 mb-6 mt-3">
                  <h3 className="font-semibold text-lightcold">{step.title}</h3>
                  <p className="font-normal text-sm text-stonecold">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
            <img src={img} alt="payment interface" />
          </div>
        </>
      )}
      <img
        src={img3}
        alt="decoration"
        className="absolute right-0 -z-10 mt-0 sm:mt-[700px]"
      />
      <img
        src={img4}
        alt="decoration"
        className="absolute right-0 -z-10 mt-0 ml-0 sm:mt-[580px]"
      />
      {userMode === "business" && (
        <>
          <div className="w-full md:w-1/2 flex">
            <div className="w-2 h-96 mr-4 bg-[#25A75c]">
              <div className="bg-slate-400 h-80" />
            </div>
            <div>
              {stepData.slice(4, 8).map((step: SingleStepData) => (
                <div
                  key={step.id}
                  className="flex flex-col gap-2 mb-6 lg:mt-3 lg:w-2/3"
                >
                  <h3 className="font-semibold text-lightcold">{step.title}</h3>
                  <p className="font-extralight text-sm text-lightcold">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
            <img src={img2} alt="wallet interface" />
          </div>
        </>
      )}
    </div>
  );
};
