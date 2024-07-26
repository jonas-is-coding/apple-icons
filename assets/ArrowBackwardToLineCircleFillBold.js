import * as React from "react";
const SvgArrowbackwardtolinecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.85-7c-.62 0-1.09-.47-1.09-1.07v-8.6c0-.61.47-1.08 1.09-1.08.6 0 1.08.47 1.08 1.08v8.6c0 .6-.48 1.07-1.08 1.07m12.21-5.37c0 .68-.48 1.12-1.17 1.12h-4.17l-1.84-.14 1.7 1.49.77.74c.22.21.35.46.35.82 0 .6-.44 1.05-1.1 1.05a1.1 1.1 0 0 1-.78-.35l-3.82-3.9c-.22-.21-.36-.5-.36-.83 0-.32.16-.61.36-.82l3.82-3.92c.22-.24.51-.35.78-.35.65 0 1.1.45 1.1 1.06 0 .34-.13.6-.35.81l-.76.77-1.71 1.48 1.84-.14h4.17c.69 0 1.17.45 1.17 1.11" />
  </svg>
);
export default SvgArrowbackwardtolinecirclefillBold;
