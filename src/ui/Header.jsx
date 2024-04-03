import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { motion, useInView, useAnimation } from "framer-motion";
import { TextUpVariant } from "../animationVariants/TextUpVariant";
import { ButtonRotateVariant } from "../animationVariants/ButtonRotateVariant";
import { Link } from "react-scroll";

const Header = () => {
  const headerRef = useRef();
  const headerInView = useInView(headerRef);
  const headerAnimationControl = useAnimation();
  const ButtonAnimationControl = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerAnimationControl.start("visible");
      ButtonAnimationControl.start("visible");
    }
  }, [headerInView, headerAnimationControl, ButtonAnimationControl]);
  return (
    <motion.header className="navbar font-primaryFont px-8 h-36 shadow-xl bg-[#4F9843]">
      <motion.div
        className="navbar-start"
        ref={headerRef}
        variants={TextUpVariant}
        initial="hidden"
        animate={headerAnimationControl}
      >
        <Link to={"/"}>
          <img src="/logo.webp" alt="logo" className="w-48" />
        </Link>
      </motion.div>
      <motion.div
        className="navbar-center"
        ref={headerRef}
        variants={TextUpVariant}
        initial="hidden"
        animate={headerAnimationControl}
      >
        <ul className="flex items-center gap-6">
          <li className=" font-bold capitalize tracking-widest text-xl">
            <Link to="/" className="cursor-pointer">
              home
            </Link>
          </li>
          <li className=" font-bold capitalize tracking-wide  text-xl">
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer"
              duration={1000}
            >
              about
            </Link>
          </li>
          <li className=" font-bold capitalize tracking-wide  text-xl">
            how to buy
          </li>
          <li className=" font-bold capitalize tracking-wide  text-xl">
            bridge
          </li>
          <li className=" font-bold capitalize tracking-wide  text-xl">
            takenomics
          </li>
          <li className=" font-bold capitalize tracking-wide  text-xl">
            roadmaps
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="navbar-end"
        ref={headerRef}
        variants={ButtonRotateVariant}
        initial="hidden"
        animate={ButtonAnimationControl}
      >
        <Button className="">buy now</Button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
