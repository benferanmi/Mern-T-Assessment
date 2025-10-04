import Logo from "@/assets/images/logo.svg";
import fb from "@/assets/images/fb.svg";
import ig from "@/assets/images/ig.svg";
import x from "@/assets/images/X.svg";

const Footer = () => {
  return (
    <footer className="mt-40 mb-5 flex flex-col sm:flex-row h-40 mx-2 sm:mx-0">
      <div className="w-full sm:w-2/3 flex flex-col items-center sm:items-start justify-between">
        <img src={Logo} />
        <div className="flex flex-col gap-5 items-center sm:items-start my-2 sm:my-0">
          <div className="flex gap-2">
            <img src={ig} />
            <img src={fb} />
            <img src={x} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              2015-2022 Taxaide Technologies Limited. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/3 mt-2 sm:mt-0 flex justify-between">
        <div>
          <h1 className="font-bold text-base mb-4">About Us</h1>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li>About</li>
            <li>Legal & privacy</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-base mb-4">Products</h1>
          <ul className="text-gray-500 text-sm flex flex-col gap-4">
            <li>TBook®</li>
            <li>TaxiTWithhold®</li>
            <li>TaxiTPayroll®</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
