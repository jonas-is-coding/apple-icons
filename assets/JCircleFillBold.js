import * as React from "react";
const SvgJcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.5-6.85c-1.93 0-3.43-.9-3.87-2.3-.07-.22-.1-.44-.1-.69 0-.8.54-1.32 1.33-1.34.73 0 1.15.32 1.37.97.2.56.61.87 1.25.87.73 0 1.14-.5 1.14-1.51v-5.42c0-1.02.54-1.66 1.48-1.66.95 0 1.5.63 1.5 1.66v5.5c0 2.51-1.51 3.92-4.1 3.92" />
  </svg>
);
export default SvgJcirclefillBold;
