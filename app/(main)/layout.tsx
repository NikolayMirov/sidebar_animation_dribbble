import Sidebar from "@/components/sidebar/sidebar";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-10 h-full w-full flex">
      <Sidebar />
      <main className="w-full ">{children}</main>
    </div>
  );
};

export default LayoutMain;
