const techs = {
  Typescript: {
    background: "bg-blue-500/20",
    textColor: "text-blue-400",
  },
  Solidity: {
    background: "bg-violet-500/20",
    textColor: "text-violet-400",
  },
  Javascript: {
    background: "bg-yellow-500/20",
    textColor: "text-yellow-400",
  },
  "Tailwind css": {
    background: "bg-sky-500/20",
    textColor: "text-sky-400",
  },
  "Next js": {
    background: "bg-black/20 dark:bg-white/20",
    textColor: "text-black dark:text-white",
  },
  Foundry: {
    background: "bg-orange-500/20",
    textColor: "text-orange-400",
  },
  Slither: {
    background: "bg-rose-500/20",
    textColor: "text-rose-400",
  },
  "Ethers js": {
    background: "bg-indigo-500/20",
    textColor: "text-indigo-400",
  },
  Hardhat: {
    background: "bg-yellow-500/20",
    textColor: "text-yellow-400",
  },
  "Node js": {
    background: "bg-green-500/20",
    textColor: "text-green-400",
  }
}


export default function MiniTechBox({ name }) {
  const boxClass = `flex flex-row items-center justify-center w-max h-8 px-2 mr-2 mb-2 ${techs[name].background}`;
  
  return (
    <div className={boxClass}>
      <a className={`text-sm ${techs[name].textColor}`}>{name}</a>
    </div>
  );
}