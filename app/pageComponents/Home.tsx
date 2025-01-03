import Hero from '../components/hero';
import TechBox from '../components/techBox';
import Project from '../components/project';

import data from '../json/projects.json';

export default function Home() {
  return (
    <div className="w-full h-svh overflow-auto">
      <Hero/>
      <div className="sm:py-10 sm:px-10 py-5 px-2">
        <a className="sm:text-3xl text-2xl">Projects</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <div className="flex flex-col">
        {
          data.projects.map((project, index) => {
            return (<Project key={index} title={project.title} discription={project.discription} tech={project.techUsed} image={project.image} liveDemo={project.liveDemo} sourceCode={project.sourceCode}/>);
          })
        }
        </div>
      </div>
      <div className="sm:pt-10 sm:px-10 pt-5 px-2">
        <a className="sm:text-3xl text-2xl">Languages</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <div className="flex flex-col sm:flex-row flex-wrap">
        {
          ["Typescript", "Rust", "Javascript", "Tailwind css"].map((name, index) => {
            return (<TechBox key={index} name={name}/>);
          })
        }
        </div>
      </div>
       {/*
        <div className="sm:pt-10 sm:px-10 pt-5 px-2">
        <a className="sm:text-3xl text-2xl">Blockchain technologies and tools</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <div className="flex flex-col sm:flex-row flex-wrap">
        {
          ["Foundry", "Slither", "Ethers js", "Uniswap V2 & forks", "Chainlink", "Hardhat"].map((name, index) => {
            return (<TechBox key={index} name={name}/>);
          })
        }
        </div>
      </div>
      */}
      <div className="sm:pt-10 sm:px-10 pt-5 px-2">
        <a className="sm:text-3xl text-2xl">Frameworks and tools</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <div className="flex flex-col sm:flex-row flex-wrap">
        {
          ["Next js", "Node js", "Docker", "Cargo"].map((name, index) => {
            return (<TechBox key={index} name={name}/>);
          })
        }
        </div>
      </div>
    </div>
  );
}
