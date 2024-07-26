import * as React from "react";
const SvgStarfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.18 25.524c.67.51 1.5.35 2.4-.31l5.92-4.34 5.9 4.34c.91.66 1.74.82 2.41.31.66-.5.8-1.34.44-2.37l-2.34-6.95 5.97-4.26c.9-.65 1.3-1.4 1.03-2.19s-1.02-1.16-2.14-1.16h-7.3l-2.22-6.93c-.34-1.07-.92-1.66-1.75-1.66-.84 0-1.42.59-1.76 1.66l-2.22 6.93H2.2c-1.1 0-1.85.37-2.12 1.14-.27.81.13 1.56 1.03 2.21l5.97 4.26-2.34 6.95c-.36 1.03-.22 1.87.44 2.37" />
  </svg>
);
export default SvgStarfillBold;
