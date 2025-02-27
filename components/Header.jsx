import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-3 px-8">
        <div className="text-basic font-bold text-[29px]">Logo</div>

        <ul className="hidden md:flex items-center gap-16">
          <li className="text-basic text-[16px] cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Blog</li>
          <button className="text-white bg-basic py-[16px] px-[10px] rounded-[6px] w-[125px] text-[13px] text-balance">
            Contact Us
          </button>
        </ul>
        <p className="md:hidden">Menu</p>
      </nav>
    </div>
  );
};

export default Header;
