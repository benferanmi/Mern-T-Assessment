import { SingleFeaturedData, FeaturedData } from "../../types";

interface FeaturesProps {
  data: FeaturedData;
}

const FeatureCards = ({ data }: FeaturesProps) => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center mx-2 sm:mx-0">
        <h1 className="font-semibold text-lightcold text-[36px] text-center">
          Payments tools designed for you
        </h1>
        <p className="font-extralight text-[18px] text-lightcold text-center">
          Explore payment features that provides you with every possible
          solution
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-6 items-center justify-center">
        {data.map((data: SingleFeaturedData) => (
          <div
            key={data.id}
            className="w-[300px] lg:w-[400px] h-72 lg:h-96 border rounded-xl flex flex-col justify-center px-6 sm:px-10 gap-4"
          >
            <img src={data.icon} alt={data.title} className="w-16" />
            <h1 className="font-medium text-[22px]">{data.title}</h1>
            <p className="font-normal text-[18px] text-stonecold">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
