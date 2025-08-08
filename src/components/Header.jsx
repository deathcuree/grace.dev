import { Link } from 'react-scroll';
import Button from './Button';
import resumePdf from '../assets/Andaya_FullStackDeveloper.pdf';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="header">
            <div className="p-1">
              <h1 className="text-gradient text-[20px] font-bold leading-[0.8] lg:text-left lg:text-[30px]">
                GRACE <span className="block text-white">ANDAYA</span>
              </h1>
            </div>
          </Link>
          <Button href={resumePdf} variant="sm" download="Andaya_FullStackDeveloper.pdf">Download Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
