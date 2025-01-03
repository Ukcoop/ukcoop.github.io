type Styles = Record<string, string>;

export default function Link({ text, style, to }: { text: string, style: string, to: string }) {
  const styles: Styles = {
    primary: 'flex flex-row items-center justify-center w-max h-14 px-4 mr-2 mb-2 bg-stone-400 text-black',
    secondary: 'flex flex-row items-center justify-center w-max h-14 px-4 mr-2 mb-2 bg-stone-400/30 dark:text-stone-400 text-stone-700',
  };

  return (
    <a className={styles[style]} target="_blank" href={to}>
      {text}
    </a>
  );
}
