import React from 'react';
// link
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link to="header">
            <div className="p-1">
              <h1 className="text-gradient text-[20px] font-bold leading-[0.8] lg:text-left lg:text-[30px]">
                GRACE <span className="block text-white">ANDAYA</span>
              </h1>
            </div>
          </Link>
          {/* button */}
          <Link to="contact">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
