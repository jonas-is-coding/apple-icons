import * as React from "react";
const SvgArrowbackwardtolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.642 18.807c.91 0 1.64-.7 1.64-1.62v-7.68c.02.43.21.86.5 1.16l7.64 7.61c.36.36.78.53 1.22.53.96 0 1.64-.69 1.64-1.6 0-.52-.22-.92-.54-1.22l-2.62-2.64-2.72-2.35 2.56.11h13c1.05 0 1.76-.69 1.76-1.7 0-1.02-.71-1.7-1.76-1.7h-13l-2.55.11 2.71-2.36 2.62-2.63c.32-.31.54-.72.54-1.22 0-.92-.68-1.61-1.64-1.61-.44 0-.86.18-1.22.53l-7.64 7.63c-.29.29-.48.71-.5 1.15v-7.68c0-.92-.73-1.63-1.64-1.63-.92 0-1.64.71-1.64 1.63v15.56c0 .92.72 1.62 1.64 1.62" />
  </svg>
);
export default SvgArrowbackwardtolineBold;
