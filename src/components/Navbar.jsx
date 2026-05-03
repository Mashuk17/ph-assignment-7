import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar w-11/12 mx-auto">
          <div className="flex-1">
            <Image src="/logo.png" alt="logo" width={140} height={140}></Image>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <Link href="/timeline">
                  <button>Timeline</button>
                </Link>
              </li>
              <li>
                <Link href="/stats">
                  <button>Stats</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
