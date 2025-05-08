import { Link } from "react-router";
import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { motion } from "motion/react";
import parse from "html-react-parser";
import { homeContent } from "~/lib/constants";
import { transition } from "~/lib/animation";
import womanImg from "/assets/home/woman.png";

function Home() {
  // @ts-expect-error
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="section"
    >
      <div className="container relative mx-auto h-full">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="z-10 flex w-full flex-col items-center justify-center pb-14 pt-36 lg:absolute lg:w-auto lg:items-start lg:pb-0 lg:pt-0"
          >
            <h1 className="h1">{parse(homeContent.jobName)}</h1>
            <p className="mb-4 font-primary text-[26px] lg:mb-12 lg:text-[36px]">
              {homeContent.jobLocation}
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              thuê tôi
            </Link>
          </motion.div>
          <div className="flex max-h-96 justify-end lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition}
              className="relative overflow-hidden lg:-right-40"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition}
                src={womanImg}
                alt="Cover Image"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
