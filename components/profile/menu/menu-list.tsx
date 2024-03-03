import { MenuListItem } from "./menu-list-item";

export const MenuList = () => {
  const menuData = ["View profile", "Manage subscriptions", "View history"];

  return (
    <div className="grid grid-cols-1 gap-y-1 px-3 py-2">
      {menuData.map((title) => (
        <MenuListItem key={title} title={title} />
      ))}
    </div>
  );
};
