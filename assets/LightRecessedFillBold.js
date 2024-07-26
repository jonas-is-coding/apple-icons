import * as React from "react";
const SvgLightrecessedfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.172 21.422c10.16 0 17.21-4.75 17.21-10.71 0-5.97-7.05-10.71-17.21-10.71-10.13 0-17.17 4.74-17.17 10.71 0 5.96 7.04 10.71 17.17 10.71m0-3.95c-6.66 0-11.36-2.84-11.36-6.5s4.71-6.5 11.36-6.5c6.68 0 11.4 2.84 11.4 6.5s-4.72 6.5-11.4 6.5m0-2.2c5.22 0 9.12-2.03 9.12-4.3 0-.87-.56-1.69-1.55-2.37-1.47 1.86-4.28 3.11-7.57 3.11s-6.1-1.24-7.56-3.09c-.98.68-1.53 1.49-1.53 2.35 0 2.27 3.88 4.3 9.09 4.3" />
  </svg>
);
export default SvgLightrecessedfillBold;
