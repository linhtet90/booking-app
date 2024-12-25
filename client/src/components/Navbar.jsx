const Navbar = () => {
  return (
    <div className="navbar bg-sky-950 h-12 flex justify-center">
      <nav className="w-full max-w-screen-lg flex justify-between items-center text-white p-3">
        <a href="#" className="font-semibold">
          Let&apos;s Go
        </a>

        <ul className="flex ">
          <li className="ml-5 py-1 px-4 bg-white text-sky-950 cursor-pointer">
            <a href="">Register</a>
          </li>
          <li className="ml-5 py-1 px-4 bg-white text-sky-950 cursor-pointer">
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
