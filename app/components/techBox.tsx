import { BiLogoTypescript } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";
import { GiAnvil } from "react-icons/gi";
import { GiSnake } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";
import { SiEthers } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const techs = {
  Typescript: {
    borderColor: "border-blue-500",
    background: "bg-blue-500/20",
    textColor: "text-blue-400",
    discription: "General purpose",
    icon: <BiLogoTypescript className="text-blue-400 text-3xl"/>
  },
  Solidity: {
    borderColor: "border-violet-500",
    background: "bg-violet-500/20",
    textColor: "text-violet-400",
    discription: "Smart contracts",
    icon: <SiSolidity className="text-violet-400 text-3xl"/>
  },
  Javascript: {
    borderColor: "border-yellow-500",
    background: "bg-yellow-500/20",
    textColor: "text-yellow-400",
    discription: "General purpose",
    icon: <BiLogoJavascript className="text-yellow-400 text-3xl"/>
  },
  "Tailwind css": {
    borderColor: "border-sky-500",
    background: "bg-sky-500/20",
    textColor: "text-sky-400",
    discription: "Styleing",
    icon: <SiTailwindcss className="text-sky-400 text-3xl"/>
  },
  "Next js": {
    borderColor: "border-black dark:border-white",
    background: "bg-black/20 dark:bg-white/20",
    textColor: "text-black dark:text-white",
    discription: "Full stack",
    icon: <RiNextjsFill className="text-black dark:text-white text-3xl"/>
  },
  Foundry: {
    borderColor: "border-orange-500",
    background: "bg-orange-500/20",
    textColor: "text-orange-400",
    discription: "Smart contract development",
    icon: <GiAnvil className="text-orange-400 text-3xl"/>
  },
  Slither: {
    borderColor: "border-rose-500",
    background: "bg-rose-500/20",
    textColor: "text-rose-400",
    discription: "Security & Auditing",
    icon: <GiSnake className="text-rose-400 text-3xl"/>
  },
  "Ethers js": {
    borderColor: "border-indigo-500",
    background: "bg-indigo-500/20",
    textColor: "text-indigo-400",
    discription: "Blockchain interface",
    icon: <SiEthers className="text-indigo-400 text-3xl"/>
  },
  Hardhat: {
    borderColor: "border-yellow-500",
    background: "bg-yellow-500/20",
    textColor: "text-yellow-400",
    discription: "Local EVM node",
    icon: <FaHardHat className="text-yellow-400 text-3xl"/>
  },
  "Node js": {
    borderColor: "border-green-500",
    background: "bg-green-500/20",
    textColor: "text-green-400",
    discription: "Server apps",
    icon: <SiNodedotjs className="text-green-400 text-3xl"/>
  }
}

export default function TechBox({ name }) {
  const boxClass = `flex flex-row items-center justify-center w-max h-14 px-4 mr-2 mb-2 ${techs[name].background} border-2 ${techs[name].borderColor}`;

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
