import * as React from "react";
const SvgBagBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 24.886h13.76c2.49 0 3.94-1.45 3.94-4.11V8.686c0-2.65-1.46-4.12-4.13-4.12h-1.55c-.27-2.66-2.39-4.57-5.24-4.57-2.84 0-4.97 1.91-5.24 4.57h-1.54c-2.68 0-4.14 1.46-4.14 4.12v12.09c0 2.66 1.46 4.11 4.14 4.11m6.78-22.38c1.25 0 2.18.83 2.4 2.06h-4.79c.22-1.23 1.14-2.06 2.39-2.06m-6.46 19.36c-.93 0-1.44-.46-1.44-1.45V9.056c0-.99.51-1.46 1.44-1.46h12.92c.93 0 1.44.47 1.44 1.46v11.36c0 .99-.51 1.45-1.24 1.45Z" />
  </svg>
);
export default SvgBagBold;
