import PromoBanner from "../components/reuseable/PromoBanner";
import { individualFeaturedData } from "../lib/featuresData";
import FeatureCards from "../components/reuseable/FeatureCards";
import Footer from "../components/navigations/Footer";
import AppDownloadSection from "../components/reuseable/AppDownloadSection";
import IndividualBanner from "../components/banners/IndividualBanner";
import { useEffect } from "react";
import { StepsSection } from "../components/reuseable/StepsSection";

const IndividualView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-black">
        <IndividualBanner />
      </div>
      <div className="xl:flex xl:flex-col xl:items-center">
        <div className="mx-0 xl:w-[1256px]">
          <FeatureCards data={individualFeaturedData} />
          <StepsSection />
          <AppDownloadSection />
          <PromoBanner />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default IndividualView;
