import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { socialLinks } from "~/lib/constants";

export default function Socials() {
  // @ts-expect-error
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="ml-24 hidden xl:flex"
    >
      <ul className="flex gap-x-4">
        {socialLinks.map((item) => (
          <li key={item.name}>
            <a href={item.href} target="_blank">
              <item.icon className="size-4 text-[#696c6d] hover:text-primary" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
