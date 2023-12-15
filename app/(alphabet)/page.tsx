'use client';

import './alphabet.css';

import { useEffect, useMemo, useState } from 'react';

import AlphabetItem from './item';

const COLUMN_COUNT = 40;
const ALPHABET_SIZE = 40;

export default function AlphabetPage() {
  const [inputList, setInputList] = useState<string[]>([]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setInputList((prevInputList) => prevInputList.slice(0, prevInputList.length - 1));
    }

    if (e.key === ' ') {
      setInputList((prevInputList) => [...prevInputList, e.key]);
    }

    if (e.key >= 'a' && e.key <= 'z') {
      setInputList((prevInputList) => [...prevInputList, e.key]);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const totalWidth = useMemo(() => {
    return inputList.length > COLUMN_COUNT
      ? (COLUMN_COUNT - 1) * ALPHABET_SIZE + 500
      : (inputList.length - 1) * ALPHABET_SIZE + 500;
  }, [inputList]);

  const [isPaused, setIsPaused] = useState(true);
  return (
    <>
      <main className="flex h-[calc(100vh-160px)] w-full items-start justify-center px-[130px] py-12 ">
        <div className="relative">
          {inputList.map((letter, index) => (
            <AlphabetItem
              key={index}
              letter={letter}
              isPaused={isPaused}
              left={-totalWidth / 2 + (index % COLUMN_COUNT) * ALPHABET_SIZE}
              top={Math.floor(index / COLUMN_COUNT) * ALPHABET_SIZE}
            />
          ))}
        </div>
      </main>
      <button
        className="flex h-20 w-full items-center justify-center border-t font-normal text-white"
        onClick={() => setIsPaused(false)}
      >
        RELEASE!
      </button>
    </>
  );
}
