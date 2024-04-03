import { useEffect, useRef } from "react";

import Button from "../../ui/Button";
import { motion, useInView, useAnimation } from "framer-motion";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import { ButtonRotateVariant } from "../../animationVariants/ButtonRotateVariant";
import { Element } from "react-scroll";

const HomeSection = () => {
  const ref = useRef();
  const homeInView = useInView(ref);
  const homeAnimationControl = useAnimation();

  useEffect(() => {
    if (homeInView) {
      homeAnimationControl.start("visible");
    }
  }, [homeInView, homeAnimationControl]);
  return (
    <Element
      name="/"
      className="min-h-screen font-primaryFont relative my-8 bg-no-repeat bg-home-bg-image "
    >
      <div className="bg-primary/[.8] pt-12 pb-36 border-b border-borderColor">
        <div className=" flex items-center justify-center mx-auto max-w-[1000px] flex-col ">
          <div className=" grid grid-cols-2 gap-x-6 items-center  justify-center ">
            <HomeLeft />
            <HomeRight />
          </div>

          <motion.div
            className="grid grid-cols-3 w-full gap-6"
            ref={ref}
            variants={ButtonRotateVariant}
            initial="hidden"
            animate={homeAnimationControl}
          >
            <Button size={"large"} image={"/gimini-icon.webp"}>
              gimini
            </Button>
            <Button size={"large"} image={"/binance-icon.webp"}>
              binance
            </Button>
            <Button size={"large"} image={"/kucoin-icon.webp"}>
              kucoin
            </Button>
            <Button size={"large"} image={"/huobi-icon.webp"}>
              huobi
            </Button>
            <Button size={"large"} image={"/ByBit-icon.webp"}>
              bibit
            </Button>
            <Button size={"large"} image={"/crypto-icon.webp"}>
              crypto.com
            </Button>
            <Button size={"large"} image={"/bitget-icon.webp"}>
              bitget
            </Button>
            <Button size={"large"} image={"/okx-icon.webp"}>
              okx
            </Button>
            <Button size={"large"} image={"/bingx-icon.webp"}>
              bingx japan
            </Button>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default HomeSection;
