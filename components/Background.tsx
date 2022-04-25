import React from "react";
import Particles from "react-tsparticles";
import { imgs } from "../data/tec-imgs";

const Background = () => {
  let param: any = {
    particles: {
      number: {
        value: 20,
        limit: 25,
        density: {
          enable: true,
          value_area: 2000,
        },
      },

      shape: {
        type: ["images"],
        images: imgs.map((img) => ({
          src: img,
          height: 500,
          width: 500,
        })),
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false,
        },
      },
      size: {
        value: 15,
        random: false,
        anim: {
          enable: true,
          speed: 3,
          size_min: 8,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#9D9D9D",
        opacity: 0.7,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 600,
          line_linked: {
            opacity: 0.8,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 125,
          duration: 1,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <Particles
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      params={param}
    />
  );
};

export default Background;
