import React, { useEffect } from "react";
import classes from "./Porfolio.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioInfo } from "../../data/portfolio-data";
import Link from "next/link";

const Porfolio = () => {
  return (
    <section id="portfolio" className={classes.container}>
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
              <Link href={info.ghLink}>
                <a target="_blank">
                  <img
                    src={info.githubImg}
                    alt="github-icon"
                    width="30px"
                    height="30px"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
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
      </div>
    </section>
  );
};

export default Porfolio;
