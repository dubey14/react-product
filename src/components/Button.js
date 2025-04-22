import { memo } from "react";

function Button(props) {
  console.log("Button Render");
  return (
    <>
      <button onClick={props.decrease}>-</button>
    </>
  );
}
export default memo(Button);
