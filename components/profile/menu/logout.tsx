import { LogOut } from "lucide-react";
import Link from "next/link";

export const Logout = () => {
  return (
    <div className="px-3">
      <button className="text-[#385372] w-full flex justify-between pt-2 items-center">
        <span className="text-base font-medium">Logout</span>
        <LogOut className="w-4 h-4 text-[#385372]" />
      </button>
      <div className="text-[10px]">
        <span>v 1.0.34 - </span>
        <Link href="" className="hover:underline">
          Terms and conditions
        </Link>
      </div>
    </div>
  );
};
