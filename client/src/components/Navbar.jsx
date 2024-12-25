const Navbar = () => {
  return (
    <div className="navbar flex h-12 justify-center bg-sky-950">
      <nav className="flex w-full max-w-screen-lg items-center justify-between p-3 text-white">
        <a href="#" className="font-semibold">
          Let&apos;s Go
        </a>

        <ul className="flex">
          <li className="ml-5 cursor-pointer bg-white px-4 py-1 text-sky-950">
            <a href="">Register</a>
          </li>
          <li className="ml-5 cursor-pointer bg-white px-4 py-1 text-sky-950">
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
