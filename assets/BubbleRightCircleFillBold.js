import * as React from "react";
const SvgBubblerightcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m2.89-5.51c-.26 0-.47-.11-.77-.39l-2.14-1.91h-3.69c-1.74 0-2.77-1.04-2.77-2.76v-4.49c0-1.7 1.03-2.77 2.77-2.77h7.43c1.72 0 2.75 1.06 2.75 2.77v4.49c0 1.72-1.1 2.76-2.67 2.76h-.32v1.63c0 .41-.22.67-.59.67" />
  </svg>
);
export default SvgBubblerightcirclefillBold;
