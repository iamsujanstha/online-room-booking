import React, { FC } from "react";

import { BiSearch } from "react-icons/bi";

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 flex-1 text-center border-x-[1px]">
          Any Week
        </div>
        <div className="text-sm font-semibold pl-6 pr-6 text-gray-400 flex flex-row items-center">
          <div className="hidden sm:block pr-2">Add guest</div>
          <div className="p-1 bg-red-100 rounded-full text-white"><BiSearch size={16}/></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
