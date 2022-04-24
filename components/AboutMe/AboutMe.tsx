import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./AboutMe.module.css";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { imgs } from "../../data/tec-imgs";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  const spanVariant = {
    hidden: {
      x: "-45vw",
    },
    visible: {
      x: 0,
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      transition: { easeIn: [0.25, 0.45, 0.7, 0.9], duration: 0.4 },
    },
  };

  const liOneVariant = {
    hidden: {
      x: "-50vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      transition: {
        easeIn: [0.25, 0.45, 0.7, 0.9],
        duration: 0.5,
      },
    },
  };
  // const liTwoVariant = {
  //   hidden: {
  //     x: "-50vw",
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
  //     transition: {
  //       easeIn: [0.25, 0.45, 0.7, 0.9],
  //       duration: 0.7,
  //     },
  //   },
  // };

  const liThreeVariant = {
    hidden: {
      x: "-50vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      transition: {
        easeIn: [0.25, 0.45, 0.7, 0.9],
        duration: 0.9,
      },
    },
  };

  const childVariants = {
    visible: {
      y: 0,
      opacity: [0.1, 0.3, 0.5, 0.8, 1],
      transition: {
        duration: 1,
      },
    },
    hidden: { y: "-20vh" },
  };

  const imgVariants = {
    visible: {
      x: 0,
      opacity: [0.3, 0.5, 0.7, 0.8, 1],
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 1.5,
      },
    },
    hidden: { x: "200vw" },
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <section ref={ref} id="aboutme" className={classes.container}>
      <div className={classes.aboutInfo}>
        <motion.p variants={spanVariant} animate={animation} initial="hidden">
          About me
        </motion.p>
        <motion.ul>
          <motion.li
            variants={liOneVariant}
            animate={animation}
            initial="hidden"
            className={classes.infoList}
          >
            I&apos;m a Costa Rican-based Software Developer who is highly
            motivated and passionate about delivering solutions that add to
            people&apos;s lives.
          </motion.li>

          <motion.li
            variants={liThreeVariant}
            animate={animation}
            initial="hidden"
            className={classes.techP}
          >
            Here are a few technologies i&apos;ve work with:
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={childVariants}
          animate={animation}
          initial="hidden"
          className={classes.techImgs}
        >
          {imgs.map((link, i) => (
            <motion.li key={i} className={classes.imgList}>
              <img width="20px" height="20px" src={link} alt="tec-img" />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        variants={imgVariants}
        initial="hidden"
        animate={animation}
        className={classes.imgContainer}
      >
        <img
          className={classes.profilePic}
          src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
          alt="profile-pic"
        />
      </motion.div>
    </section>
  );
};

export default AboutMe;
