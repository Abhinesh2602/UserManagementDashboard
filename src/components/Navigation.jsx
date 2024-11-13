import { useState, useEffect, useRef, Children } from "react";
import plusIcon from "../assets/plusIcon.svg";
import searchIcon from "../assets/search.svg";
import filterIcon from "../assets/filter.svg";

export const Navigation = ({ onSearch, searchTerm, onAddUserClick }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || "");

  //debouncing
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(localSearchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearchTerm, onSearch]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <span className="text-3xl font-medium text-custom-darkblue">
          User Management Dashboard
        </span>
      </div>

      <div className="flex gap-12 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search User"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            className="shadow-custom rounded-md text-black p-3 pl-10 outline-none 
              border-none bg-white focus:ring-0 focus:outline-none w-64
              placeholder:text-gray-400"
          />
          <img
            src={searchIcon}
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-[1rem]"
          />
        </div>

        <button
          className="p-3 flex justify-between items-center gap-2 text-white bg-custom-red 
          shadow-custom rounded-md hover:bg-opacity-90 transition-colors"
          onClick={onAddUserClick}
        >
          <img src={plusIcon} alt="Add" className="h-[1rem]" />
          Add New User
        </button>
      </div>
    </div>
  );
};

export default Navigation;
