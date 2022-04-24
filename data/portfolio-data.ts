interface PortInfo {
  id: number;
  folderImg: string;
  githubImg: string;
  title: string;
  description: string;
  tech: string[];
}

export const portfolioInfo: PortInfo[] = [
  {
    id: 1,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    title: "Full Stack E-commerce",
    description:
      "E-commerce app from scratch. MERN Stack e-commerce projec. React,Node.js Full-Stack shopping app course using Redux, Stripe, andJWT. React shopping cart tutorial.",
    tech: ["Javascript", "Express", "MongoDB"],
  },
  {
    id: 2,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    title: "Pig Game",
    description:
      "E-commerce app from scratch. MERN Stack e-commerce projec. React,Node.js Full-Stack shopping app course using Redux, Stripe, andJWT",
    tech: ["Express", "React"],
  },
  {
    id: 3,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    title: "Netflix Clone",
    description:
      "E-commerce app from scratch. MERN Stack e-commerce projec. React,Node.js Full-Stack shopping app ",
    tech: ["Javascript", "MongoDB"],
  },
];
