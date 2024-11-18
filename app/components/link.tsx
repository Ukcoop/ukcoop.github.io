export default function Link({ text, style, to }) {
  const styles = {
    primary: 'flex flex-row items-center justify-center w-max h-14 px-4 mr-2 mb-2 bg-stone-400 text-black',
    secondary: 'flex flex-row items-center justify-center w-max h-14 px-4 mr-2 mb-2 bg-stone-400/20 text-stone-400'
  }

  return (
    <a className={styles[style]} href={to}>{text}</a>    
  );
}
