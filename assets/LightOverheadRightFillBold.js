import * as React from "react";
const SvgLightoverheadrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.292 2.59h2.32c.5 5.06 4.22 8.44 9.53 8.44 5.32 0 9.04-3.38 9.52-8.44h2.33a1.295 1.295 0 0 0 0-2.59h-23.7C.572 0 .002.6.002 1.3s.58 1.29 1.29 1.29m22.05 4.03 5.62 5.63c.53.55 1.28.52 1.86-.02.5-.52.5-1.29-.02-1.82l-6.6-6.6c-.17 1.02-.46 1.96-.86 2.81m-2.7 3.56 5.17 5.19c.54.57 1.31.56 1.86-.01.52-.51.52-1.27 0-1.81l-5.29-5.29c-.5.72-1.09 1.37-1.74 1.92m-4.15 2.12 6.2 6.22c.55.53 1.3.52 1.84 0 .52-.56.53-1.31 0-1.84l-5.43-5.44c-.79.47-1.68.83-2.61 1.06m-6.16.12 9.22 9.22c.55.54 1.31.54 1.84 0 .53-.52.53-1.28 0-1.82l-7.14-7.13c-1.44.09-2.58.06-3.92-.27" />
  </svg>
);
export default SvgLightoverheadrightfillBold;
