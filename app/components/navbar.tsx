function Virtical({ text, index, setIndex }) {
  let charecters = text.split('');
  return (  
    <div onClick={() => {setIndex(index)}} className="py-2 flex flex-col items-center border-2 border-transparent border-b-stone-500 hover:bg-gray-200 hover:dark:bg-gray-600 active:bg-gray-300 active:dark:bg-gray-500">
      {charecters.map((char, index) => { return (<div className="text-xl text-gray-700 dark:text-white p-0" key={index}>{char}</div>)})}
    </div>
  )
}

export default function Navbar({ setIndex }) {
  return (
    <div className="pb-2 sm:min-w-10 min-w-8 h-svh max-h-svh bg-gray-100 dark:bg-gray-800 shadow-xl overflow-auto"> 
      <Virtical text="HOME" index={0} setIndex={setIndex}/>
      <Virtical text="ABOUT" index={1} setIndex={setIndex}/>
    </div>
  );
}
