import cn from "clsx";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { Logout } from "./logout";
import { MenuInfo } from "./menu-info";
import { MenuList } from "./menu-list";

interface ProfileMenuProps {
  profileVisible: boolean;
}

export const ProfileMenu = forwardRef<HTMLDivElement, ProfileMenuProps>(
  ({ profileVisible }, ref) => {
    const [isAnimated, setIsAnimated] = useState(profileVisible);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (profileVisible) {
        setIsVisible(true);
        setTimeout(() => {
          setIsAnimated(true);
        }, 100);
      }
      if (!profileVisible) {
        setIsAnimated(false);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    }, [profileVisible]);

    const classes = useMemo(
      () =>
        cn(
          "absolute -right-52 bottom-2 w-[200px] h-[210px] transition-all duration-500  ease-in-out transform bg-white border border-[#DCDEE7] shadow-lg rounded-lg",
          isAnimated
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-10 opacity-0 pointer-events-none"
        ),
      [isAnimated]
    );

    return isVisible ? (
      <div ref={ref} className={classes}>
        <MenuInfo />
        <div className="border-t border-[#DEE5EF] " />
        <MenuList />
        <div className="border-t border-[#DEE5EF] " />
        <Logout />
      </div>
    ) : null;
  }
);
ProfileMenu.displayName = "ProfileMenu";
