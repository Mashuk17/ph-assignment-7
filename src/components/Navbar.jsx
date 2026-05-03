"use client";
import { ChartLine, History, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
                <Link
                  href="/"
                  className={`h-8  ${pathname == "/" ? "btn btn-neutral" : ""}`}
                >
                  <House size={18} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className={`h-8 ${pathname == "/timeline" ? "btn btn-neutral" : ""}`}
                >
                  <History size={18} />
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/stats"
                  className={`h-8 ${pathname == "/stats" ? "btn btn-neutral" : ""}`}
                >
                  <ChartLine size={18} />
                  Stats
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
