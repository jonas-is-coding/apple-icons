import * as React from "react";
const SvgDegreesignfarenheitBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.682 21.196c1.32 0 2.1-.85 2.1-2.18v-6.81h6.91c1.08 0 1.78-.65 1.78-1.65 0-.99-.7-1.65-1.78-1.65h-6.91v-5.46h7.58c1.12 0 1.87-.68 1.87-1.72 0-1.05-.75-1.73-1.87-1.73h-9.68c-1.34 0-2.1.81-2.1 2.17v16.85c0 1.34.76 2.18 2.1 2.18m-8.86-12.22c2.14 0 3.83-1.68 3.83-3.82s-1.69-3.83-3.83-3.83c-2.13 0-3.82 1.69-3.82 3.83s1.69 3.82 3.82 3.82m0-2.14c-.94 0-1.68-.74-1.68-1.68 0-.95.74-1.69 1.68-1.69.95 0 1.69.74 1.69 1.69 0 .94-.74 1.68-1.69 1.68" />
  </svg>
);
export default SvgDegreesignfarenheitBold;
