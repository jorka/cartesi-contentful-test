import React from "react";
import { counterAnimation } from "../hooks/useAnimations";

function Counter({ number }) {
  const [count, setCount] = React.useState(number);

  const counterRef = React.useRef(null);

  React.useEffect(() => {
    counterAnimation(counterRef.current, () => setCount(number));
  }, [number]);
  return <span ref={counterRef}>{count}</span>;
}

export default Counter;
