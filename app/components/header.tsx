import { Link } from "react-router";
import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { Image, MobileNav, Socials } from "~/components";
import { links } from "~/lib/constants";
import logo from "/assets/header/logo.svg";

export default function Header() {
  // @ts-expect-error
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed z-30 flex h-[100px] w-full items-center px-[30px] lg:h-[130px] lg:px-[100px]">
      <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
        <Link
          to={"/"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="max-w-[200px]"
        >
          <Image src={logo} alt="Logo" />
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden gap-x-12 font-semibold xl:flex"
        >
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-[#696c6d] transition hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
}
