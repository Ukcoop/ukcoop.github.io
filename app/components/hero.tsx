import Sketch from './sketch';
import info from '../json/info.json';

export default function Hero() {
  return (
    <div className="w-full h-[80vh] overflow-x-clip overflow-y-auto relative">
      <Sketch />
      <div className="flex flex-col lg:pt-20 pt-5 lg:px-10 px-2 absolute top-0 left-0 z-10 w-full h-full dark:bg-black/40 bg-white/40">
        <div className="flex flex-col p-5 w-max max-w-full rounded-lg dark:bg-black/70 bg-white/70">
          <a className="lg:text-4xl text-2xl">Hello, i am Alexander Cooper.</a>
          <a className="lg:text-xl text-md">Full stack react developer</a>
          <a className="lg:text-xl text-md">Rust backend engineer</a>
          <div className="h-0 border border-stone-500 my-2"></div>
          <a href={'mailto:' + info.email}>Email: {info.email}</a>
          <a href={info.github}>Github: {info.github}</a>
          {info.linkedin !== '' && <a href={info.linkedin}>Linkedin: {info.linkedin}</a>}
        </div>
      </div>
    </div>
  );
}

