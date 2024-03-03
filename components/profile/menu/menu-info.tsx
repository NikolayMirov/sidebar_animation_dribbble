import Image from "next/image";

import cn from "clsx";

export const MenuInfo = () => {
  return (
    <div className="flex items-center w-full px-3 pt-3 pb-2">
      <div className="relative w-9 h-9 shrink-0">
        <Image src="/profile.webp" alt="profile" fill className=" rounded" />
      </div>
      <div className={cn("flex w-full justify-between ml-2  ")}>
        <div className="leading-5 ">
          <div className="font-medium text-[#FF9600]">Mark Talbierz</div>
          <div className="text-xs text-[#385372]  ">hello@talbierz.com</div>
        </div>
      </div>
    </div>
  );
};
