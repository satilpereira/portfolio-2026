import React from "react";

const NotFound = () => {
  const t404 = "404";
  return (
    <main className='container mx-auto p-4'>
      <hgroup className='mx-auto w-fit'>
        <h2
          className='
        flex flex-row pl-2 py-1'
        >
          {Array.from(t404).map((char, index) => (
            <span
              key={index}
              className='font-mono -m-3 text-9xl font-black [text-shadow:0_1px_0_oklch(var(--foreground))] [-webkit-text-stroke:4px_var(--background)]'
            >
              {char}
            </span>
          ))}
        </h2>
      </hgroup>
    </main>
  );
};

export default NotFound;
