import * as React from "react";
const SvgPoweroutlettypenfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.138.005c-1.8 0-2.89.78-4.23 2.14l-3.84 3.96c-1.43 1.45-1.41 3.6-.01 5.06l3.83 4.03c1.23 1.28 2.55 2.16 4.25 2.16h13.67c1.69 0 3.03-.88 4.25-2.16l3.83-4.03c1.41-1.47 1.43-3.61 0-5.06l-3.84-3.96c-1.34-1.36-2.43-2.14-4.24-2.14Zm-.78 6.51c1.19 0 2.19.99 2.19 2.19 0 1.21-1 2.21-2.19 2.21-1.21 0-2.2-1-2.2-2.21 0-1.2.99-2.19 2.2-2.19m15.25 0c1.21 0 2.18.99 2.18 2.19 0 1.21-.97 2.21-2.18 2.21-1.2 0-2.2-1-2.2-2.21 0-1.2 1-2.19 2.2-2.19m-7.62 1.83c1.2 0 2.19 1 2.19 2.19a2.196 2.196 0 0 1-4.39 0c0-1.19.99-2.19 2.2-2.19" />
  </svg>
);
export default SvgPoweroutlettypenfillBold;
