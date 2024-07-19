const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl font-bold">Boxigo</div>
        <div className=" space-x-10 mr-10">
          <a href="#home" className="text-white hover:text-gray-300 text-xl ">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 text-xl">
            About
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 text-xl">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
