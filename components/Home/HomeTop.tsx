import React, { useEffect } from "react";
import classes from "./HomeTop.module.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pVariant = {
  hidden: {
    y: 30,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: [0.3, 0.6, 1],
    transition: {
      easeIn: [0.17, 0.35, 0.75, 0.92],
      duration: 0.5,
    },
  },
};

const hVariant = {
  hidden: {
    y: 220,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: [0.5, 1],
    transition: {
      easeIn: [0.17, 0.35, 0.75, 0.92],
      duration: 0.7,
    },
  },
};

const buttonVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: [0.2, 0.4, 0.6, 0.8, 1],
    transition: {
      duration: 0.9,
    },
  },
};

const HomeTop = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <section id="home" ref={ref} className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.greetContainer}>
          <motion.p variants={pVariant} initial="hidden" animate={control}>
            Hello 👋, I am
          </motion.p>
          <motion.h1 variants={hVariant} initial="hidden" animate={control}>
            Alonzo Ramirez
          </motion.h1>
          <motion.h3 variants={hVariant} initial="hidden" animate={control}>
            I build things for the web.
          </motion.h3>
        </div>
        <motion.h4 variants={buttonVariant} initial="hidden" animate={control}>
          Software Developer
        </motion.h4>
        <motion.p variants={buttonVariant} initial="hidden" animate={control}>
          Entry Level Developer focused on Web Development
        </motion.p>
        <a href="/#contactme">
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            animate={control}
          >
            Contact
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default HomeTop;
