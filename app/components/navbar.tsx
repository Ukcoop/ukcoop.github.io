function Vertical({ text, index, setIndex }: { text: string, index: number, setIndex: (index: number) => void }) {
  return (
    <div
      onClick={() => setIndex(index)}
      className="py-2 flex flex-col items-center border-2 border-transparent border-b-stone-500 hover:bg-gray-200 hover:dark:bg-gray-600 active:bg-gray-300 active:dark:bg-gray-500"
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

export default function Navbar({ setIndex }: { setIndex: (index: number) => void }) {
  return (
    <div className="pb-2 sm:min-w-10 min-w-8 h-svh max-h-svh bg-gray-200 dark:bg-gray-800 shadow-xl overflow-auto">
      <Vertical text="HOME" index={0} setIndex={setIndex} />
      <Vertical text="ABOUT" index={1} setIndex={setIndex} />
    </div>
  );
}

