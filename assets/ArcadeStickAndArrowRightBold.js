import * as React from "react";
const SvgArcadestickandarrowrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.512 20.827c.96 0 1.68-.46 1.68-1.12v-9.66a5.18 5.18 0 0 0 3.46-4.89c0-2.85-2.32-5.16-5.14-5.16-2.85 0-5.17 2.33-5.17 5.16a5.17 5.17 0 0 0 3.51 4.9v9.65c0 .66.7 1.12 1.66 1.12m6.53-10.14c0 .75.58 1.34 1.32 1.34h3.58v1.78c0 1.02 1.02 1.42 1.8.77l3.81-3.1c.51-.43.5-1.13 0-1.54l-3.81-3.12c-.78-.64-1.8-.27-1.8.8v1.76h-3.58c-.74 0-1.32.58-1.32 1.31m-6.48 15.43c4.24 0 7.54-2.8 7.54-6.45 0-2.7-1.81-4.95-4.48-5.92v2.65c1.27.71 2.07 1.88 2.07 3.27 0 2.31-2.18 4.05-5.13 4.05-2.94 0-5.15-1.74-5.15-4.05 0-1.35.76-2.51 2.01-3.21v-2.68c-2.64.99-4.42 3.2-4.42 5.89 0 3.65 3.3 6.45 7.56 6.45" />
  </svg>
);
export default SvgArcadestickandarrowrightBold;
