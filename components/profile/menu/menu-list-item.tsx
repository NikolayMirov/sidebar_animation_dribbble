import Link from "next/link";

interface MenuListItemProps {
  title: string;
}

export const MenuListItem = ({ title }: MenuListItemProps) => {
  return (
    <Link href="" className="text-base font-medium text-[#385372]">
      {title}
    </Link>
  );
};
