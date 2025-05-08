import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { MenuIcon, XIcon } from "lucide-react";
import { links } from "~/lib/constants";
import { menuVariants } from "~/lib/animation";

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav className="text-primary xl:hidden">
      <MenuIcon
        className="size-[30px] cursor-pointer"
        onClick={() => setOpenMenu(true)}
      />
      <motion.div
        variants={menuVariants}
        initial={"hidden"}
        animate={openMenu ? "show" : ""}
        className="absolute right-0 top-0 z-20 h-screen w-full max-w-xs bg-white shadow-2xl"
      >
        <XIcon
          className="absolute left-4 top-14 z-30 size-[36px] cursor-pointer text-primary"
          onClick={() => setOpenMenu(false)}
        />
        <ul className="flex h-full flex-col items-center justify-center gap-y-8 font-primary text-3xl font-bold text-primary">
          {links.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
