import info from '../json/info.json';

export default function About() {
  return (
    <div className="w-full h-svh overflow-auto">    
      <div className="flex flex-col sm:pt-10 sm:px-10 pt-5 px-2">
        <a className="sm:text-3xl text-2xl">Usefull information</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <a href={'mailto:' + info.email}>Email: {info.email}</a>
        <a href={info.github}>Github: {info.github}</a>
        {info.linkedin !== '' && <a href={info.linkedin}>Linkedin: {info.linkedin}</a>}
      </div>
      <div className="flex flex-col sm:pt-10 sm:px-10 pt-5 px-2">
        <a className="sm:text-3xl text-2xl">My journey as a software developer</a>
        <div className="h-0 border border-stone-500 my-2"></div>
        <a className="text-xl py-2">Date: 2018</a>
        <a className="text-sm">
{'I started out by programming in scratch, which is how I learned about programming. One day, I was messing around in scratch, then it broke on me! Then I thought, "This sucks, I should learn a real programming language". so I went to YouTube and watched The Coding Trains "Start learning here!" playlist, and I made a simple program, the program (modified to work on my site) that is in the background of the hero section of my site!'}
        </a>
        <a className="text-xl py-2">Date: 2020</a>
        <a className="text-sm">
{'Over the years, I have been able to implement algorithms into code. In my final year of middle school, I was calculating the slopes of two points and decided to automate it in JavaScript to speed up the process.'}
        </a>
        <a className="text-xl py-2">Date: December 2022</a>
        <a className="text-sm">
{'Later, I discovered cryptocurrency and blockchain and fell in love with the industry, so I decided to learn Solidity, and I began to enjoy creating smart contracts, which are more fun than creating traditional apps.'}
        </a>
        <a className="text-xl py-2">Date: May 20, 2024</a>
        <a className="text-sm">
{"This is the day I decided to become a blockchain developer. I started making bond nft and realized that Hardhat's testing framework was difficult to work with and was not testing nearly enough to ensure the app worked, so I decided to start over and use Foundry, which is far superior to Hardhat, but I still use hardhat's local node for testing the app on a local blockchain because anvil does not work well for me. I am now a blockchain developer!"}
        </a>
      </div>
    </div>
  );
}
