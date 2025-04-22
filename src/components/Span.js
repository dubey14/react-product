import { memo } from "react";

function Span(props) {
  console.log("Custom Span render");
  return <span>{props.value}</span>;
}
export default memo(Span);
