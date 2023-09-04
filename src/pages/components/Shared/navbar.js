import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link href="/components/ui/cpucategory/cpu">CPU</Link>
            </li>
            <li>
              <Link href="/components/ui/motherboardcategory/motherboard">
                Motherboard
              </Link>
            </li>
            <li>
              <Link href="/components/ui/ramcategory/ramCategory">RAM</Link>
            </li>
            <li>
              <Link href="/components/ui/powerUniteCategory/powerUniteCard">
                Power Supply
              </Link>
            </li>
            <li>
              <Link href="/components/ui/storageCategory/storageCard">
                Storage
              </Link>
            </li>
            <li>
              <Link href="/components/ui/monitorCategory/monitorCard">
                Monitor
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">
          <span className="text-red-500">Hi</span>
          <span className="text-blue-500">Teach</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <Link href="/components/ui/cpucategory/cpu">CPU</Link>
          </li>
          <li>
            <Link href="/components/ui/motherboardcategory/motherboard">
              Motherboard
            </Link>
          </li>
          <li>
            <Link href="/components/ui/ramcategory/ramCategory">RAM</Link>
          </li>
          <li>
            <Link href="/components/ui/powerUniteCategory/powerUniteCard">
              Power Supply
            </Link>
          </li>
          <li>
            <Link href="/components/ui/storageCategory/storageCard">
              Storage
            </Link>
          </li>
          <li>
            <Link href="/components/ui/monitorCategory/monitorCard">
              Monitor
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-secondary">Pc Builder</button>
      </div>
    </div>
  );
};

export default Navbar;
