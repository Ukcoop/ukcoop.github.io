type Techs = Record<string, { borderColor: string, background: string, textColor: string, discription: string, icon: JSX.Element }>;

import { BiLogoTypescript } from "react-icons/bi";
//import { SiSolidity } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaRust } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";
import { SiDocker } from "react-icons/si";
import { GiWoodenCrate } from "react-icons/gi";
//import { GiAnvil } from "react-icons/gi";
//import { GiSnake } from "react-icons/gi";
//import { FaHardHat } from "react-icons/fa";
//import { SiEthers } from "react-icons/si";
//import { SiChainlink } from "react-icons/si";
//import { GiUnicorn } from "react-icons/gi";
import { SiNodedotjs } from "react-icons/si";

const techs: Techs = {
  Typescript: {
    borderColor: "border-blue-500",
    background: "bg-blue-500/10",
    textColor: "text-blue-400",
    discription: "General purpose",
    icon: <BiLogoTypescript className="text-blue-400 text-3xl"/>
  },
/*  Solidity: {
    borderColor: "border-violet-500",
    background: "bg-violet-500/10",
    textColor: "text-violet-400",
    discription: "Smart contracts",
    icon: <SiSolidity className="text-violet-400 text-3xl"/>
  },
*/
  Javascript: {
    borderColor: "border-yellow-500",
    background: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    discription: "General purpose",
    icon: <BiLogoJavascript className="text-yellow-400 text-3xl"/>
  },
  Rust: {
    borderColor: "border-orange-500",
    background: "bg-orange-500/10",
    textColor: "text-orange-400",
    discription: "General purpose",
    icon: <FaRust className="text-orange-400 text-3xl"/>
  },
  "Tailwind css": {
    borderColor: "border-sky-500",
    background: "bg-sky-500/10",
    textColor: "text-sky-400",
    discription: "Styling",
    icon: <SiTailwindcss className="text-sky-400 text-3xl"/>
  },
  "Next js": {
    borderColor: "border-black dark:border-white",
    background: "bg-black/10 dark:bg-white/10",
    textColor: "text-black dark:text-white",
    discription: "Full stack",
    icon: <RiNextjsFill className="text-black dark:text-white text-3xl"/>
  },
  Docker: {
    borderColor: "border-sky-500",
    background: "bg-sky-500/10",
    textColor: "text-sky-400",
    discription: "Deployments",
    icon: <SiDocker className="text-sky-400 text-3xl"/>
  },
  Cargo: {
    borderColor: "border-yellow-500",
    background: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    discription: "Rust development",
    icon: <GiWoodenCrate className="text-yellow-400 text-3xl"/>
  },
/*
  Foundry: {
    borderColor: "border-orange-500",
    background: "bg-orange-500/10",
    textColor: "text-orange-400",
    discription: "Smart contract development",
    icon: <GiAnvil className="text-orange-400 text-3xl"/>
  },
  Slither: {
    borderColor: "border-rose-500",
    background: "bg-rose-500/10",
    textColor: "text-rose-400",
    discription: "Security & Auditing",
    icon: <GiSnake className="text-rose-400 text-3xl"/>
  },
  "Ethers js": {
    borderColor: "border-indigo-500",
    background: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    discription: "Blockchain interface",
    icon: <SiEthers className="text-indigo-400 text-3xl"/>
  },
  "Uniswap V2 & forks": {
    borderColor: "border-pink-500",
    background: "bg-pink-500/10",
    textColor: "text-pink-400",
    discription: "Decentralized exchange",
    icon: <GiUnicorn className="text-pink-400 text-3xl"/>
  },
  Chainlink: {
    borderColor: "border-blue-500",
    background: "bg-blue-500/10",
    textColor: "text-blue-400",
    discription: "Oracles & automation",
    icon: <SiChainlink className="text-blue-400 text-3xl"/>
  },
  Hardhat: {
    borderColor: "border-yellow-500",
    background: "bg-yellow-500/10",
    textColor: "text-yellow-400",
    discription: "Local EVM node",
    icon: <FaHardHat className="text-yellow-400 text-3xl"/>
  },
*/
  "Node js": {
    borderColor: "border-green-500",
    background: "bg-green-500/10",
    textColor: "text-green-400",
    discription: "Server apps",
    icon: <SiNodedotjs className="text-green-400 text-3xl"/>
  }
}

export default function TechBox({ name }: { name: string }) {
  const boxClass = `flex flex-row items-center justify-center sm:w-max w-full h-14 px-4 mr-2 mb-2 ${techs[name].background} border-2 ${techs[name].borderColor}`;

  return (
    <div className={boxClass}>
      {techs[name].icon}
      <div className="flex flex-col pl-1">
        <a className={`${techs[name].textColor}`}>{name}</a>
        <a className={`text-xs ${techs[name].textColor}`}>{techs[name].discription}</a>
      </div>
    </div>
  );
}
