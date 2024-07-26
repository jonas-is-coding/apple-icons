import * as React from "react";
const SvgSquaresplitdiagonal2X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m11.202 9.162 8.86-8.86c-.5-.2-1.1-.3-1.79-.3H4.142c-.7 0-1.29.1-1.8.3Zm-2.04 2.04-8.86-8.86c-.2.51-.3 1.09-.3 1.77v14.18c0 .68.1 1.28.3 1.78Zm4.08 0 8.86 8.86c.2-.49.3-1.09.3-1.77V4.112c0-.68-.1-1.26-.3-1.77Zm-2.04 2.04-8.86 8.87c.51.2 1.1.29 1.8.29h14.13c.69 0 1.29-.09 1.79-.29Z" />
  </svg>
);
export default SvgSquaresplitdiagonal2X2FillBold;
