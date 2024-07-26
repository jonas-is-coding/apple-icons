import * as React from "react";
const SvgLightrecessedinverseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.172 21.422c10.16 0 17.21-4.75 17.21-10.71 0-5.97-7.05-10.71-17.21-10.71-10.13 0-17.17 4.74-17.17 10.71 0 5.96 7.04 10.71 17.17 10.71m0-4.3c-6.31 0-10.83-2.67-10.83-6.15 0-3.47 4.52-6.14 10.83-6.14 6.35 0 10.87 2.67 10.87 6.14 0 3.48-4.53 6.15-10.87 6.15m.01-5.45c3.62 0 6.64-1.52 7.9-3.75-1.66-1.18-4.38-1.92-7.91-1.92-3.52 0-6.24.75-7.89 1.94 1.25 2.22 4.28 3.73 7.9 3.73" />
  </svg>
);
export default SvgLightrecessedinverseBold;
