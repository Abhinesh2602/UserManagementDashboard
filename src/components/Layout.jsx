import { Main } from "./Main";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
};
