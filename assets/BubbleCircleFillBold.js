import * as React from "react";
const SvgBubblecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.88-5.51c-.36 0-.6-.26-.6-.67v-1.63h-.31c-1.57 0-2.68-1.04-2.68-2.76v-4.49c0-1.71 1.04-2.77 2.77-2.77h7.43c1.72 0 2.75 1.07 2.75 2.77v4.49c0 1.72-1.03 2.76-2.75 2.76h-3.69l-2.15 1.91c-.3.28-.5.39-.77.39" />
  </svg>
);
export default SvgBubblecirclefillBold;
