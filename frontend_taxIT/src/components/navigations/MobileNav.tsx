import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUserModeStore } from "@/store/userModeStore";

const MobileNav = () => {
  const { userMode, switchToIndividual, switchToBusiness } = useUserModeStore();

  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <GiHamburgerMenu cursor="pointer" color="white" size={20} />
      </SheetTrigger>
      <SheetContent side="top" className="h-96">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center gap-10">
              <button
                className={`cursor-pointer ${
                  userMode === "individual" ? "border-b-2 border-green-500" : ""
                } px-2 text-xl hover:opacity-80 transition-opacity`}
                onClick={switchToIndividual}
              >
                Individual
              </button>
              <button
                className={`cursor-pointer ${
                  userMode === "business" ? "border-b-2 border-green-500" : ""
                } px-2 text-xl hover:opacity-80 transition-opacity`}
                onClick={switchToBusiness}
              >
                For Businesses
              </button>
              <button className="text-xl px-2 hover:opacity-80 transition-opacity">
                About Us
              </button>
              <button className="text-xl px-2 hover:opacity-80 transition-opacity">
                Contact
              </button>
              <button className="text-xl px-2 hover:opacity-80 transition-opacity">
                Login
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
