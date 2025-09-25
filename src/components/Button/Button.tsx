import { useState } from "react";

import './Button.css';

type ButtonProps = {
  text: string,
};

function Button({text}: ButtonProps) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // also inits re-render
    globalThis.console.debug(new Date().toISOString().split(/[TZ]/)[1], count);
  }

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
