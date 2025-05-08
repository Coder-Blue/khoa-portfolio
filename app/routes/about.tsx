import { Link } from "react-router";
import { motion } from "motion/react";
import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { Image } from "~/components";
import parse from "html-react-parser";
import { aboutContent } from "~/lib/constants";
import { transition } from "~/lib/animation";
import WomanIMG from "/assets/about/woman.png";

function About() {
  // @ts-expect-error
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container relative mx-auto h-full"
      >
        <div className="flex h-full flex-col items-center justify-center gap-x-24 text-center lg:flex-row lg:pt-16 lg:text-left">
          <div className="order-2 max-h-96 flex-1 overflow-hidden lg:order-none lg:max-h-max">
            <Image src={WomanIMG} alt="About IMG" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            className="z-10 flex flex-1 flex-col items-center justify-center pb-14 pt-36 lg:w-auto lg:items-start lg:pt-0"
          >
            <h1 className="h1">Về tôi</h1>
            <p className="mb-12 max-w-sm">
              {parse(aboutContent.jobDescription1)}
              <br />
              <br />
              {parse(aboutContent.jobDescription2)}
            </p>
            <Link to={"/projects"} className="btn">
              Xem công việc của tôi
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
