import { useState } from "react";

import './Button.css';

type ButtonProps = {
  text: string;
};

function Button({text}: ButtonProps) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // also inits re-render
  }

  f();

  return (
    <button
      className="button"
      style={{
        backgroundColor: 'lightblue',
      }}
      onClick={handleClick}
    >
      {text}: {count}
    </button>
  );
}

export { Button };

function f() {
  // noinspection TypeScriptValidateTypes - TODO: mga: come back later
  console.log(getConversions(f as { (): void; [key: string | symbol | number]: never; }));
}

function getConversions(obj: Partial<{ (): void; [key: string | symbol | number]: never; }>) {
  const toStringTagFunc = obj[Symbol.toStringTag];
  const toPrimitiveFunc = obj[Symbol.toPrimitive];

  return [
    obj["toString"],
    obj["toLocaleString"],
    obj["valueOf"],
    toStringTagFunc,
    toPrimitiveFunc,
  ];
}
