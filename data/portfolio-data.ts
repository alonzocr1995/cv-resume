interface PortInfo {
  id: number;
  folderImg: string;
  githubImg: string;
  ghLink: string;
  title: string;
  description: string;
  tech: string[];
}

export const portfolioInfo: PortInfo[] = [
  {
    id: 1,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/react-native-signal-clone",

    title: "Signal Clone",
    description: "A React Native chat app build with expo",
    tech: ["React", "Firebase", "Expo"],
  },
  {
    id: 2,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/JavaScript-pig-game",

    title: "Pig Game",
    description:
      " A JS Game. The game of Pig is a very simple jeopardy dice game in which two players race to reach 100 points",
    tech: ["Javascript", "CSS"],
  },
  {
    id: 3,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/films-react-project",
    title: "Films Project",
    description:
      "Build a netflix like app to where you can rate movies and save your favorites",
    tech: ["Typescript", "React"],
  },
  {
    id: 4,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/mycarvalue-nestjs",
    title: "Car Valuation App",
    description:
      "Building an app where you can estimate the value of a car. CURRENTLY IN PROCESS!",
    tech: ["Typescript", "Nest", "TypeORM"],
  },
  {
    id: 5,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/first-nft-project",
    title: "NFT-Drop",
    description: "Web 3 build, NFT-Drop app",
    tech: ["Typescript", "Sanity", "ThirdWeb", "Tailwind"],
  },
  {
    id: 6,
    folderImg: "https://alonzofiles.s3.amazonaws.com/images/folder.png",
    githubImg: "https://alonzofiles.s3.amazonaws.com/images/github.png",
    ghLink: "https://github.com/alonzocr1995/first-nft-project",
    title: "Reddit-Clone",
    description:
      "Reddit clone build. You can sign in with your reddit account, post, comment, upvote or downvote, comment. Build using Nextjs, Graphql, Tailwind, Sql, Supabase, Stepzen.",
    tech: ["Typescript", "Tailwind", "Stepzen", "Supabase"],
  },
];
