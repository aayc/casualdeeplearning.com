import React from "react";

type JournalEntryProps = {
  title: string;
  text: string;
  tags: string[];
  children?: any;
};
export default function JournalEntryPreview(props: JournalEntryProps) {
  return (
    <div className="mx-8 mt-12 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div className="w-96 bg-beige rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-light">{props.title}</h1>
        <p className="mt-4 leading-7">{props.text}</p>
        <div className="flex mt-4">
          {props.tags.map((t) => (
            <p className="mx-2 bg-green-600 rounded-lg p-2 text-white font-light">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
