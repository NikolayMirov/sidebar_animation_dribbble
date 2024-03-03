import cn from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IRoute } from "./sidebar";

interface RouteItemProps {
  route: IRoute;
  hide: boolean;
}

export const RouteItem = ({
  route: { path, title, icon: Icon },
  hide,
}: RouteItemProps) => {
  const pathname = usePathname();

  const linkClasses = useMemo(
    () =>
      cn(
        "h-9 hover:bg-[#F0F5F9] hover:text-[#273B50] text-[#385372] transition-all flex items-center  gap-x-2 px-2.5 py-1 rounded-lg",
        pathname === path && "bg-orange-200 hover:bg-orange-200"
      ),
    [pathname, path]
  );

  const textClasses = useMemo(
    () =>
      cn(
        "font-medium transition-opacity duration-300",
        hide && "opacity-0 w-0 pointer-events-none",
        !hide && "delay-300 opacity-100 w-full pointer-events-auto"
      ),
    [hide]
  );

  return (
    <Link href={path} className={linkClasses}>
      <div>
        <Icon className="w-4 h-4" />
      </div>

      <p className={textClasses}>{title}</p>
    </Link>
  );
};
