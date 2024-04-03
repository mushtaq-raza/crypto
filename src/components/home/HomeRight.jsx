import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { RightTextRevealVariant } from "../../animationVariants/RightTextRevealVariant";

const HomeRight = () => {
  const ref = useRef();

  const textInView = useInView(ref);
  const TextAnimationControl = useAnimation();

  useEffect(() => {
    if (textInView) {
      TextAnimationControl.start("visible");
    }
  }, [textInView, TextAnimationControl]);
  return (
    <motion.div
      ref={ref}
      className=" space-y-8"
      variants={RightTextRevealVariant}
      initial="hidden"
      animate={TextAnimationControl}
    >
      <img src="/home-front.webp" alt="home" className="w-full" />
    </motion.div>
  );
};

export default HomeRight;
