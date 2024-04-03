import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { LeftTextRevealVariant } from "../../animationVariants/LeftTextRevealVariant";
import { RightTextRevealVariant } from "../../animationVariants/RightTextRevealVariant";
import { ShowVariant } from "../../animationVariants/ShowVariant";
import { Element } from "react-scroll";

const AboutSection = () => {
  const ref = useRef();
  const refP1 = useRef();
  const refP2 = useRef();

  const MainInView = useInView(ref);
  const p1InView = useInView(refP1);
  const p2InView = useInView(refP2);
  const animationControl = useAnimation();
  const animationControlP2 = useAnimation();

  useEffect(() => {
    if (MainInView) {
      animationControl.start("visible");
    }
    if (p1InView) {
      animationControl.start("visible");
    }
    if (p2InView) {
      animationControlP2.start("visible");
    }
  }, [MainInView, animationControl, animationControlP2, p1InView, p2InView]);
  return (
    <Element
      as="section"
      name="about"
      className="pt-12 pb-36 font-primaryFont max-w-[1000px] mx-auto"
    >
      <div className="grid grid-cols-2 gap-x-4" ref={ref}>
        <motion.img
          src="/about.webp"
          alt="about"
          variants={LeftTextRevealVariant}
          initial="hidden"
          animate={animationControl}
          className="w-full"
        />
        <div className=" space-y-4">
          <motion.h2
            className="text-8xl drop-shadow-textShadow mb-12 text-right font-bold tracking-wide"
            variants={ShowVariant}
            initial="hidden"
            animate={animationControl}
          >
            about
          </motion.h2>
          <div className=" space-y-8 text-xl tracking-wide leading-9  ml-12">
            <motion.p
              variants={RightTextRevealVariant}
              initial="hidden"
              animate={animationControl}
              ref={refP1}
            >
              Pepe is tired of watching everyone play hot potato with the
              endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
              The Inu’s have had their day. It’s time for the most recognizable
              meme in the world to take his reign as king of the memes.
            </motion.p>
            <motion.p
              variants={RightTextRevealVariant}
              initial="hidden"
              animate={animationControlP2}
              ref={refP2}
            >
              Pepe is here to make memecoins great again. Launched stealth with
              no presale, zero taxes, LP burnt and contract renounced, $PEPE is
              a coin for the people, forever. Fueled by pure memetic power, let
              $PEPE show you the way.
            </motion.p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
