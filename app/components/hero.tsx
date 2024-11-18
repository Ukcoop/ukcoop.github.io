import Sketch from './sketch';

export default function Hero() {
  return (
    <div className="w-full h-svh overflow-x-clip overflow-y-auto relative">
      <Sketch />
      <div className="flex flex-col sm:pt-20 pt-5 sm:px-10 px-2 absolute top-0 left-0 z-10 w-full h-full bg-black/40">
        <div className="flex flex-col p-5 w-max max-w-full rounded-lg bg-black/50">
          <a className="sm:text-4xl text-2xl">Hello, i am Alexander Cooper.</a>
          <a className="sm:text-xl text-md">Full stack (React / Blockhain) developer</a>
          <a className="sm:text-xl text-md">Solidity developer</a>
        </div>
      </div>
    </div>
  );
}

