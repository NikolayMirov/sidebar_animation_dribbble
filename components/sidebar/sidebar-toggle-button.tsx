import cn from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface SidebarToggleButtonProps {
  hide: boolean;
  setHide: Dispatch<SetStateAction<boolean>>;
}

export const SidebarToggleButton = ({
  hide,
  setHide,
}: SidebarToggleButtonProps) => {
  const [isAnimated, setIsAnimated] = useState(hide);
  const Chevron = hide ? ChevronRight : ChevronLeft;

  useEffect(() => {
    if (!hide) {
      setTimeout(() => {
        setIsAnimated(true);
      }, 500);
    }
    if (hide) {
      setIsAnimated(false);
    }
  }, [hide]);

  const handleClick = useCallback(() => {
    setHide(!hide);
  }, [hide, setHide]);

  return (
    <div
      className={cn(
        "absolute -right-2 top-10  group  transition-all  duration-500 flex items-center  text-[#385372] ",
        hide && "-right-8"
      )}
    >
      <div
        className={cn(
          "rounded-full w-6 h-6 bg-[#e1e8f1] flex items-center justify-center cursor-pointer",
          hide && "bg-white"
        )}
        onClick={handleClick}
      >
        <Chevron className="w-4 h-4 " />
      </div>
      {isAnimated && (
        <div
          className={cn(
            " transition-all opacity-0 translate-x-8 duration-500 absolute -left-3  text-xs uppercase transform group-hover:translate-x-full  select-none group-hover:opacity-100 "
          )}
        >
          Shrink
        </div>
      )}
    </div>
  );
};
