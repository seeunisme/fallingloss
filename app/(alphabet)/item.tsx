interface Props {
  letter: string;
  isPaused: boolean;
  left: number;
  top: number;
}

export default function AlphabetItem({ letter, isPaused, left, top }: Props) {
  if (letter === ' ') {
    return <div style={{ left: `${left}px`, top: `${top}px` }} className="absolute w-[500px]" />;
  }

  return (
    <div style={{ left: `${left}px`, top: `${top}px` }} className="absolute w-[500px]">
      {/* {isPaused ? ( */}
      <img
        className={isPaused ? 'block' : 'hidden'}
        src={`/images/alphabet/${letter.toUpperCase()}/${letter}.png`}
        alt=""
      />
      {/* ) : ( */}
      <img
        className={`animated-alphabet ${isPaused ? 'hidden' : 'block'}`}
        src={`/images/alphabet/${letter.toUpperCase()}/${letter}.gif`}
        alt=""
      />
      {/* )} */}
    </div>
  );
}
