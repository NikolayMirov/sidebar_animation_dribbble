import cn from "clsx";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useCallback,
  useMemo,
} from "react";

interface ProfileProps {
  hide: boolean;
  profileVisible: boolean;
  setProfileVisible: Dispatch<SetStateAction<boolean>>;
}

export const ProfileRoute = forwardRef<HTMLDivElement, ProfileProps>(
  ({ profileVisible, setProfileVisible, hide }, ref) => {
    const handleClick = useCallback(() => {
      setProfileVisible(!profileVisible);
    }, [profileVisible, setProfileVisible]);

    const classes = useMemo(
      () =>
        cn(
          "flex  w-full h-16 border-t border-[#F4F6F9] transition-all cursor-pointer hover:bg-[#F0F5F9] px-3 rounded-b-md mt-3",
          profileVisible && "bg-orange-200 hover:bg-orange-200"
        ),
      [profileVisible]
    );
    return (
      <div ref={ref} onClick={handleClick} className={classes}>
        <div className="flex items-center w-full">
          <div className="relative w-9 h-9 shrink-0">
            <Image src="/profile.webp" alt="profile" fill className="rounded" />
          </div>
          <div
            className={cn(
              "flex w-full justify-between ml-2 transition-opacity",
              hide && "opacity-0 w-0 duration-100 pointer-events-none",
              !hide &&
                " delay-300 opacity-100 w-full duration-500pointer-events-auto"
            )}
          >
            <div className=" leading-4">
              <div className="text-[10px] text-[#385372] ">User Account</div>
              <div className="font-medium text-[#FF9600]">Mark T.</div>
            </div>
            <div className="flex items-center">
              <div
                className={cn(
                  "flex items-center justify-center bg-[#e1e8f1]  text-[#385372] w-5 h-5 rounded",
                  profileVisible && "bg-orange-300"
                )}
              >
                <ChevronsUpDown className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProfileRoute.displayName = "ProfileRoute";
