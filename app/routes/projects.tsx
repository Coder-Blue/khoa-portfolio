import { Link } from "react-router";
import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";
import { motion } from "motion/react";
import { Image } from "~/components";
import parse from "html-react-parser";
import { projectsContent } from "~/lib/constants";
import { transition } from "~/lib/animation";

function Projects() {
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
      <div className="container relative mx-auto h-full">
        <div className="flex h-full flex-col items-center justify-start gap-x-24 pb-8 pt-24 text-center lg:flex-row lg:pt-36 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Dự án</h1>
            <p className="mb-12 max-w-sm">
              {parse(projectsContent.projectDescription1)}
              <br />
              <br />
              {parse(projectsContent.projectDescription2)}
            </p>
            <Link to={"/contact"} className="btn mx-auto mb-[30px] lg:mx-0">
              Thuê tôi
            </Link>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            {projectsContent.projectsDisplay.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="h-[187px] max-w-[250px] overflow-hidden bg-accent lg:h-[220px] lg:max-w-[320px]"
                target="_blank"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  className="h-full object-cover transition-all duration-500 hover:scale-110 lg:h-[220px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
