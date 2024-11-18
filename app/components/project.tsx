import MiniTechBox from './miniTechBox';
import Link from './link';

export default function Project({ title, discription, tech, image, liveDemo, sourceCode }: { title: string, discription: string, tech: Array<string>, image: string, liveDemo: string, sourceCode: string }) {
  return (
    <div className="flex flex-col h-max w-full max-w-full">
      <div className="min-h-full w-full min-w-64 overflow-hidden">
        <img src={`${image}`} alt={title} className="h-full w-full object-cover object-left"/>
      </div>
      <div className="flex flex-col justify-between h-max w-full bg-gray-100 dark:bg-gray-800">
        <div className="p-2">
          <a className="text-xl">{title}</a>
          <div className="h-0 border border-stone-500 my-2"></div>
          <a className="text-md">{discription}</a>
        </div>
        <div className="p-2">
          <a className="text-xl">Tech used</a>
          <div className="h-0 border border-stone-500 my-2"></div>
          <div className="flex flex-row flex-wrap">
            {
              tech.map((name, index) => {
                return (<MiniTechBox key={index} name={name}/>);
              })
            }
          </div>
          <div className="h-0 border border-stone-500 my-2"></div>
          <div className="flex flex-row flex-wrap">
            {liveDemo !== '' && <Link text="Live demo" style="primary" to={liveDemo}/>}
            <Link text="Source code" style="secondary" to={sourceCode}/>
          </div>
        </div>
      </div>
    </div>
  );
}
