import React from "react";
import Particles from "react-tsparticles";
import { imgs } from "../data/tec-imgs";

const Background = () => {
  // const imgs: string[] = [
  //   "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
  //   "https://iconape.com/wp-content/files/kr/371166/svg/371166.svg",
  //   "https://w7.pngwing.com/pngs/558/166/png-transparent-node-js-javascript-react-express-js-linux-foundation-mongodb-icons-angle-text-rectangle.png",
  // ];

  // const imgs: string[] = [
  //   "https://alonzofiles.s3.amazonaws.com/images/GraphQL.png",
  //   "https://alonzofiles.s3.amazonaws.com/images/React.png",
  //   "https://alonzofiles.s3.amazonaws.com/images/javascript.png",
  //   "https://alonzofiles.s3.amazonaws.com/images/nest.svg",
  //   "https://alonzofiles.s3.amazonaws.com/images/pngwing.com.png",
  //   "https://alonzofiles.s3.amazonaws.com/images/typescript.png",
  // ];

  let param: any = {
    particles: {
      number: {
        value: 20,
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
        value: 0.9,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.5,
          sync: false,
        },
      },
      size: {
        value: 14,
        random: false,
        anim: {
          enable: true,
          speed: 2,
          size_min: 9,
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
            opacity: 1,
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
