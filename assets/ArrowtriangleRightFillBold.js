import * as React from "react";
const SvgArrowtrianglerightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.942 19.003c.54 0 1-.22 1.66-.53l14.3-6.88c1.12-.53 1.63-1.2 1.63-2.09s-.51-1.55-1.63-2.09L3.602.543c-.67-.32-1.12-.54-1.66-.54-1.07 0-1.94.82-1.94 2.19l.01 14.62c0 1.37.87 2.19 1.93 2.19" />
  </svg>
);
export default SvgArrowtrianglerightfillBold;
