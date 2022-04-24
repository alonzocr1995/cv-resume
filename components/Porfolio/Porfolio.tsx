import React, { useEffect } from "react";
import classes from "./Porfolio.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioInfo } from "../../data/portfolio-data";

const Porfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const control = useAnimation();

  const divVariants = {
    visible: {
      y: 0,
      opacity: [0.2, 0.4, 0.6, 0.8, 1],
      transition: {
        type: "spring",
      },
    },
    hidden: {
      y: "20vh",
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (!inView) {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section ref={ref} id="portfolio" className={classes.container}>
      <h2>My Portfolio</h2>
      <div className={classes.cardContainer}>
        {portfolioInfo.map((info) => (
          <div className={classes.card} key={info.id}>
            <div className={classes.iconContainer}>
              <img
                src={info.folderImg}
                alt="folder-icon"
                width="30px"
                height="30px"
              />
              <a href="">
                <img
                  src={info.githubImg}
                  alt="github-icon"
                  width="30px"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <div className={classes.cardContent}>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </div>
            <div className={classes.cardTecContainer}>
              {info.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}

        {/* <div
          // style={{ backgroundColor: "var(--background-secondary)" }}
          // initial="hidden"
          // animate={control}
          // variants={divVariants}
          // whileHover={{ scale: 1.09, backgroundColor: "var(--pink)" }}
          className={classes.card}
        >
          <div className={classes.iconContainer}>
            <img
              src="https://www.hyra.dev/static/media/folder.2b06e8166980708df312f8762d64968e.svg"
              alt="folder-icon"
              width="30px"
              height="30px"
            />
            <img
              src="https://www.hyra.dev/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg"
              alt="github-icon"
              width="30px"
              height="30px"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={classes.cardContent}>
            <h3>Full Stack E-commerce</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi rem quaerat tenetur aut quia totam. Eum consequatur
            </p>
          </div>
          <div className={classes.cardTecContainer}>
            <span>Javascript</span>
            <span>Javascript</span>
          </div>
        </div>
        <div
          // style={{ backgroundColor: "var(--background-secondary)" }}
          // initial="hidden"
          // animate={control}
          // variants={divVariants}
          // whileHover={{ scale: 1.09, backgroundColor: "var(--pink)" }}
          className={classes.card}
        >
          <div className={classes.iconContainer}>
            <img
              src="https://www.hyra.dev/static/media/folder.2b06e8166980708df312f8762d64968e.svg"
              alt="folder-icon"
              width="30px"
              height="30px"
            />
            <img
              src="https://www.hyra.dev/static/media/github-icon.c48bfb2a53c47ee345a50672e3d24e07.svg"
              alt="github-icon"
              width="30px"
              height="30px"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={classes.cardContent}>
            <h3>Full Stack E-commerce</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi rem quaerat tenetur aut quia totam. Eum consequatur
            </p>
          </div>
          <div className={classes.cardTecContainer}>
            <span>Javascript</span>
            <span>Javascript</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Porfolio;
