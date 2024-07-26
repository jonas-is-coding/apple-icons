import * as React from "react";
const SvgFigurestanddressBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.324 5.519a2.76 2.76 0 0 0 2.76-2.76c0-1.53-1.23-2.76-2.76-2.76a2.75 2.75 0 0 0-2.75 2.76c0 1.52 1.23 2.76 2.75 2.76m-1.64 21.87c.72 0 1.29-.58 1.29-1.3v-5.09c0-.2.17-.36.35-.36.19 0 .35.16.35.36v5.09a1.295 1.295 0 1 0 2.59 0v-5.09h1.43c.7 0 1-.58.79-1.28l-2.47-7.75c-.2-.59.59-.84.8-.21l1.6 4.98c.5 1.54 2.66.93 2.17-.61l-1.61-4.98c-.96-2.98-2.14-4.36-5.03-4.36h-1.23c-2.89 0-4.07 1.38-5.02 4.36l-1.62 4.98c-.49 1.54 1.66 2.15 2.17.61l1.59-4.98c.21-.63 1.01-.38.81.21l-2.47 7.75c-.21.7.09 1.28.78 1.28h1.44v5.09c0 .72.58 1.3 1.29 1.3" />
  </svg>
);
export default SvgFigurestanddressBold;
