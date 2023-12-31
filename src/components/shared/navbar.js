import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cpucategory/cpu">CPU</Link>
            </li>
            <li>
              <Link href="/motherboardcategory/motherboard">Motherboard</Link>
            </li>
            <li>
              <Link href="/ramcategory/ramCategory">RAM</Link>
            </li>
            <li>
              <Link href="/powerUniteCategory/powerUniteCard">
                Power Supply
              </Link>
            </li>
            <li>
              <Link href="/storageCategory/storageCard">Storage</Link>
            </li>
            <li>
              <Link href="/monitorCategory/monitorCard">Monitor</Link>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cpucategory/cpu">CPU</Link>
          </li>
          <li>
            <Link href="/motherboardcategory/motherboard">Motherboard</Link>
          </li>
          <li>
            <Link href="/ramcategory/ramCategory">RAM</Link>
          </li>
          <li>
            <Link href="/powerUniteCategory/powerUniteCard">Power Supply</Link>
          </li>
          <li>
            <Link href="/storageCategory/storageCard">Storage</Link>
          </li>
          <li>
            <Link href="/monitorCategory/monitorCard">Monitor</Link>
          </li>
        </ul>
      </div>
      <div className="navbar flex justify-between">
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="btn btn-xs btn-error ml-44 text-white"
          >
            logOut
          </button>
        ) : (
          <Link href="/login">
            <button className="btn btn-xs btn-secondary ml-44 text-white">
              login
            </button>
          </Link>
        )}

        <Link href="/pcbuilder/pcbuilderpage">
          <button className="btn btn-primary ">Pc Builder</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
