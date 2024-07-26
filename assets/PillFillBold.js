import * as React from "react";
const SvgPillfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.461 1.928c-2.66-2.66-6.55-2.56-9.37.27l-4.46 4.44 9.12 9.13 4.44-4.45c2.84-2.83 2.93-6.71.27-9.39m-15.8 6.69-4.46 4.46c-2.84 2.84-2.93 6.72-.28 9.4 2.67 2.66 6.56 2.56 9.38-.27l4.48-4.47Z" />
  </svg>
);
export default SvgPillfillBold;
