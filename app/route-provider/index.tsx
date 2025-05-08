import { useContext } from "react";
import { CursorContext } from "~/route-provider/context";

import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

import { Header } from "~/components";

import About from "~/routes/about";
import Contact from "~/routes/contact";
import Home from "~/routes/home";
import Projects from "~/routes/projects";

function RouteProvider() {
  const location = useLocation();
  // @ts-expect-error
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <>
      <Header />
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index path="/*" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="pointer-events-none fixed left-0 top-0 z-50 h-[32px] w-[32px] rounded-full bg-primary"
      ></motion.div>
    </>
  );
}

export default RouteProvider;
