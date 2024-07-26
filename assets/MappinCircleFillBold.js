import * as React from "react";
const SvgMappincirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.1-16.49c0-1.7 1.39-3.1 3.1-3.11 1.71 0 3.12 1.38 3.12 3.11 0 1.33-.83 2.46-2 2.89v5.69c0 1.45-.5 3.04-1.12 3.04-.63 0-1.12-1.61-1.12-3.04v-5.69a3.085 3.085 0 0 1-1.98-2.89m1.4-.85c0 .54.47 1.01.99 1.01.55 0 .99-.47.99-1.01s-.44-.99-.99-.99c-.52 0-.99.45-.99.99" />
  </svg>
);
export default SvgMappincirclefillBold;
