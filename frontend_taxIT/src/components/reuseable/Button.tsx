export const Button = ({ title }: { title: string }) => {
  return (
    <button className="bg-gradient-to-r from-first to-second px-3.5 py-3 rounded-lg cursor-pointer hover:opacity-80">
      <p className="text-white font-semibold font-poppins text-[16px]">{title}</p>
    </button>
  );
};

export const BannerButton = ({
  title,
  bgColor,
  textColor,
}: {
  title: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <button
      className={`${bgColor} py-2 w-40 rounded-lg cursor-pointer hover:opacity-80`}
    >
      <p className={textColor}>{title}</p>
    </button>
  );
};
