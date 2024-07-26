import * as React from "react";
const SvgChineseyuanrenminbisignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.562 16.91c0 .38.31.69.69.69h4.65v2.45c0 1.21.83 2.03 2.03 2.03 1.21 0 2.03-.82 2.03-2.03V17.6h4.71c.37 0 .69-.31.69-.69 0-.39-.32-.69-.69-.69h-4.71v-2.38l.03-.06h4.68c.37 0 .69-.32.69-.69 0-.39-.32-.69-.69-.69h-3.82l5.57-9.03c.27-.43.45-.93.45-1.44 0-1.12-.9-1.93-2.09-1.93-.88 0-1.5.49-1.89 1.29l-4.87 8.83h-.1L4.052 1.3C3.632.45 3.072 0 2.122 0 .902 0 .002.82.002 1.97c0 .5.15.97.43 1.42l5.58 9.01h-3.76c-.38 0-.69.3-.69.69 0 .37.31.69.69.69h4.62l.03.06v2.38h-4.65c-.38 0-.69.3-.69.69" />
  </svg>
);
export default SvgChineseyuanrenminbisignBold;
