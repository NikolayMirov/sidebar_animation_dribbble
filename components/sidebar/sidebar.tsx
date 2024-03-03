"use client";

import cn from "clsx";
import {
  BarChart,
  Coins,
  LayoutDashboard,
  LucideIcon,
  Mail,
  PieChart,
  Settings2,
  Speech,
  Wallet,
} from "lucide-react";
import {
  ElementRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Logo } from "../logo";
import { ProfileMenu } from "../profile/menu/profile-menu";
import { ProfileRoute } from "../profile/profile-route";
import { MacFakeButtons } from "./mac-fake-buttons";
import { RouteList } from "./route-list";
import { SidebarToggleButton } from "./sidebar-toggle-button";

export interface IRoute {
  title: string;
  icon: LucideIcon;
  path: string;
}

const routes: IRoute[] = [
  { title: "Home", icon: LayoutDashboard, path: "/" },
  { title: "Sales", icon: Coins, path: "/sales" },
  { title: "Costs", icon: BarChart, path: "/costs" },
  { title: "Payments", icon: Wallet, path: "/payments" },
  { title: "Finances", icon: PieChart, path: "/finances" },
  { title: "Messages", icon: Mail, path: "/messages" },
];

const bottomRoutes: IRoute[] = [
  { title: "Settings", icon: Settings2, path: "/settings" },
  { title: "Support", icon: Speech, path: "/support" },
];

const Sidebar = () => {
  const [hide, setHide] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);

  const profileMenuRef = useRef<ElementRef<"div">>(null);
  const profileRouteRef = useRef<ElementRef<"div">>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        profileVisible &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node) &&
        profileRouteRef.current &&
        !profileRouteRef.current.contains(event.target as Node)
      ) {
        setProfileVisible(false);
      }
    },
    [profileVisible, profileMenuRef, profileRouteRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const classes = useMemo(
    () =>
      cn(
        "relative rounded-lg transition-all duration-500  h-full bg-[#E8EDF5] border border-[#DEE5EF]",
        hide ? "w-[66px] " : "w-[200px]"
      ),
    [hide]
  );

  return (
    <div className={classes}>
      <div className="h-full rounded-lg bg-[#EAEFF6] border border-[#FEFEFE] ">
        <div className="h-full rounded-lg bg-white border border-[#F4F6F9] pt-3 ">
          <MacFakeButtons />
          <Logo hide={hide} />
          <div className="flex flex-col justify-between h-[calc(100%-142px)] px-3">
            <RouteList items={routes} hide={hide} />
            <RouteList items={bottomRoutes} hide={hide} />
          </div>
          <ProfileRoute
            ref={profileRouteRef}
            hide={hide}
            profileVisible={profileVisible}
            setProfileVisible={setProfileVisible}
          />
        </div>
      </div>
      <SidebarToggleButton hide={hide} setHide={setHide} />
      <ProfileMenu ref={profileMenuRef} profileVisible={profileVisible} />
    </div>
  );
};

export default Sidebar;
