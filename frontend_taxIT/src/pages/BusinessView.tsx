import { useEffect } from "react";
import FeatureCards from "../components/reuseable/FeatureCards";
import { BusinnessFeaturedData } from "../lib/featuresData";
// import BusinessBanner from "../components/banners/BusinessBanner";
import bannerImg from "@/assets/images/Rectangle2.png";
import { StepsSection } from "../components/reuseable/StepsSection";
import PromoBanner from "../components/reuseable/PromoBanner";
import Footer from "../components/navigations/Footer";
import eclipseOne from "@/assets/images/Ellipse1.png";
import { Button } from "../components/ui/button";

const BusinessView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="bg-black relative pb-32 md:pb-40">
        <div className="md:w-[40%] block items-center m-auto">
          <div className="h-[500px] md:h-[650px] flex flex-col items-center justify-center gap-8 relative z-10">
            <h1 className="text-white text-[46px] md:text-4xl font-semibold mx-2 sm:mx-0 text-center">
              Manage payroll, compliance & HR in real time
            </h1>
            <p className="text-base text-gray-300 text-center">
              Make income tax remittances to the state internal revenue service
              for your employees.
            </p>
            <Button
              variant="gradient"
              className="h-[60px] w-[200px] font-semibold text-base rounded-lg"
            >
              Create free account
            </Button>
          </div>
        </div>

        <div className="absolute bottom-[-300px] right-0 w-[560px] h-[560px] pointer-events-none z-20">
          <div className="w-[530px] h-[530px] border-[#5cb32a] border-2 rounded-full" />
          <img
            src={eclipseOne}
            alt="decoration"
            className="w-[500px] h-[500px] absolute top-[15px] left-[15px]"
          />
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[300px] md:top-[620px] z-50">
        <img
          src={bannerImg}
          alt="business banner"
          className="max-w-full h-auto"
        />
      </div>

      <div className="bg-white pt-48 sm:pt-96 relative z-40 xl:flex xl:flex-col xl:items-center">
        <div className="mx-0 xl:w-[1256px] relative">
          <FeatureCards data={BusinnessFeaturedData} />
          <StepsSection />
          <PromoBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BusinessView;
