import cn from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  hide: boolean;
}

export const Logo = ({ hide }: LogoProps) => {
  return (
    <Link
      href="/"
      className="h-6  transition-all flex items-center  gap-x-1 my-4 px-3"
    >
      <div
        className={cn(
          "shrink-0  transition-all duration-500",
          hide ? "ml-1.5" : "ml-0"
        )}
      >
        <Image src="/logo.png" alt="Logo" height={24} width={24} />
      </div>

      <p
        className={cn(
          "text-lg  text-[#FF9600] font-bold transition-opacity duration-200 ",
          hide && "opacity-0 w-0 pointer-events-none",
          !hide && " delay-300 opacity-100 w-full pointer-events-auto"
        )}
      >
        TensorFlow
      </p>
    </Link>
  );
};
