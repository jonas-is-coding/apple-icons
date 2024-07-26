import * as React from "react";
const SvgTagfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.775 26.096 11.58-11.59c.97-.97 1.13-1.59 1.13-3.07v-4.43c0-1.37-.33-1.92-1.39-2.96l-2.66-2.68c-1.05-1.04-1.59-1.37-2.96-1.37h-4.43c-1.48 0-2.08.18-3.05 1.15l-11.59 11.58c-1.86 1.86-1.89 3.93 0 5.81l7.57 7.56c1.89 1.88 3.94 1.88 5.8 0m3.48-15.69c-1.02 0-1.8-.8-1.8-1.8 0-1.02.78-1.82 1.8-1.82 1.03 0 1.82.8 1.82 1.82 0 1-.79 1.8-1.82 1.8" />
  </svg>
);
export default SvgTagfillBold;
