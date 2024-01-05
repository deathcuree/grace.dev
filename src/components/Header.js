import React from 'react';
// images
// import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          {/* <a href="#">
            <img src={Logo} className="p-1" alt="" />
          </a> */}
          <div className="p-1">
            <h1 className="text-gradient text-[20px] font-bold leading-[0.8] lg:text-left lg:text-[30px]">
              GRACE <span className="block text-white">ANDAYA</span>
            </h1>
          </div>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
