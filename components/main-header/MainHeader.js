import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "../nav-link/nav-link";

import logo from "@/assets/logo.jpg";

export default function MainHeader() {
  return (
    <>
      <header id='main-header'>
        <div id='logo'>
          <Link href='/'>
            <img
              style={{ width: "60px", marginLeft: "20px", borderRadius: "25%" }}
              className='header-logo'
              src={logo.src}
            />
          </Link>
        </div>

        <nav>
          <ul>
            <NavLink href='/news'>News</NavLink>
            <NavLink href='/archive'>Archive</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
