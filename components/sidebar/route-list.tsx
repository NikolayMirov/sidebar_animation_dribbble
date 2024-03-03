import { RouteItem } from "./route-item";
import { IRoute } from "./sidebar";

interface RouteListProps {
  items: IRoute[];
  hide: boolean;
}

export const RouteList = ({ items, hide }: RouteListProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-3">
      {items.map((route) => (
        <RouteItem key={route.title} route={route} hide={hide} />
      ))}
    </div>
  );
};
