import { useCallback, useState } from "react";
import Span from "./Span";
import Button from "./Button";

function IncrementMemo() {
  console.log("Increment memo rendered");

  let [counter, setCounter] = useState(0);

  const decrease = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, [setCounter]);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <Button decrease={decrease} />
      <Span value={counter} />

      <button onClick={increase}> + </button>
    </>
  );
}

export default IncrementMemo;
