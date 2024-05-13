import React from "react";

export default function Alphabet (props) {
  return (
    <div className="flex items-center flex-1 flex-col bg-transparent-500 opacity-60 max-w-fit min-w-32 m-10 align-middle shadow-lg shadow-slate-500">
      <p className="text-4xl">{props.alpha.actualLetter}</p>
      <p className="text-amber-600 text-2xl">{props.alpha.translatedLetter}</p>
      <p className="text-cyan-500 text-xl">{props.alpha.pronounciation}</p>
    </div>
  );
}
