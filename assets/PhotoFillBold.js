import * as React from "react";
const SvgPhotofillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m5.6-11.07c-1.64 0-2.98-1.34-2.98-2.97 0-1.61 1.34-2.97 2.98-2.97 1.61 0 2.95 1.36 2.95 2.97 0 1.63-1.34 2.97-2.95 2.97m-5.18 8.05c-.95 0-1.54-.57-1.54-1.53v-1.29l2.84-2.49c.5-.44.98-.67 1.54-.67.57 0 1.14.24 1.65.7l2.2 1.96 5.44-4.85c.55-.49 1.17-.71 1.81-.71.62 0 1.28.23 1.81.72l4.64 4.3v2.33c0 .96-.65 1.53-1.53 1.53Z" />
  </svg>
);
export default SvgPhotofillBold;
