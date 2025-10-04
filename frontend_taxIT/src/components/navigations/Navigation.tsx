import Logo from "@/assets/images/logo.svg";
import { Button } from "../ui/button";
import { useUserModeStore } from "../../store/userModeStore";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const { userMode, switchToIndividual, switchToBusiness } = useUserModeStore();

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between px-8 py-4 items-center fixed w-full bg-black z-[90]">
        <div className="flex gap-8 items-center">
          <img src={Logo} alt="logo" className="cursor-pointer w-24" />
          <button
            onClick={switchToIndividual}
            className={`cursor-pointer ${
              userMode === "individual" ? "border-b-2 border-green-500" : ""
            } px-2 text-white hover:opacity-80 transition-opacity`}
          >
            For Individuals
          </button>
          <button
            onClick={switchToBusiness}
            className={`cursor-pointer ${
              userMode === "business" ? "border-b-2 border-green-500" : ""
            } px-2 text-white hover:opacity-80 transition-opacity`}
          >
            For Businesses
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <button className="cursor-pointer text-white hover:opacity-80 transition-opacity">
            About Us
          </button>
          <button className="cursor-pointer text-white hover:opacity-80 transition-opacity">
            Contact
          </button>
          <div className="w-[1px] h-5 bg-white" />
          <button className="cursor-pointer text-white hover:opacity-80 transition-opacity">
            Login
          </button>
          <Button variant="gradient" size="lg" className="rounded-lg p-3">
            Create free account
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-between h-20 px-3 lg:hidden fixed w-full z-[90] top-0 bg-black">
        <img src={Logo} alt="logo" className="cursor-pointer w-20" />
        <div className="flex gap-8 items-center">
          <MobileNav />
        </div>
      </div>
    </>
  );
};

export default Navigation;
