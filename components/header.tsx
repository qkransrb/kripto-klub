import Logo from "@/components/logo";
import Navbar from "@/components/navbar";

const Header = () => {
  return (
    <header className="w-full h-20 bg-brand-white z-10 shadow-md">
      <div className="max-w-7xl h-full mx-auto px-10 py-2.5 flex items-center gap-x-10">
        <Logo width={142} height={40} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
