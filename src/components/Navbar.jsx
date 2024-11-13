import tacnique from "../assets/tacnique.png";
import userIcon from "../assets/userIcon.svg";

export const Navbar = () => {
  return (
    <nav className=" flex flex-row items-center justify-between h-[5.5rem] shadow-custom px-16 bg-white  z-10 relative">
      <img src={tacnique} alt="" className="h-10" />
      <img src={userIcon} alt="" className="h-10" />
    </nav>
  );
};
