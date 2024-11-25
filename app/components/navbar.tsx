function Vertical({ text, index, currentIndex, setIndex }: { text: string, index: number, currentIndex: number, setIndex: (index: number) => void }) {
  const isActive = (index == currentIndex) ? 'bg-stone-500/30 dark:bg-stone-500/50' : '';

  return (
    <div
      onClick={() => setIndex(index)}
      className={`py-1 my-1 mx-1 flex flex-col items-center border-2 border-transparent rounded-md ${isActive}`}
    >
      {text.split('').map((char, i) => (
        <div
          className="text-xl text-gray-700 dark:text-white p-0"
          key={`${index}-${i}-navbar`}>
          {char}
        </div>
      ))}
    </div>
  );
}

export default function Navbar({ currentIndex, setIndex }: { currentIndex: number, setIndex: (index: number) => void }) {
  return (
    <div className="pb-2 sm:min-w-10 min-w-8 h-svh max-h-svh bg-gray-200 dark:bg-gray-800 shadow-xl overflow-auto transition duration-300">
      <Vertical text="HOME" index={0} currentIndex={currentIndex} setIndex={setIndex} />
      <Vertical text="ABOUT" index={1} currentIndex={currentIndex} setIndex={setIndex} />
    </div>
  );
}

