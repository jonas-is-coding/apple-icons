import * as React from "react";
const SvgFlagcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.42-5.95c-.41 0-.77-.35-.77-.77v-9.88c0-.62.29-1.06.86-1.32.48-.21.9-.32 1.79-.32 2.18 0 3.53 1.06 5.46 1.06.91 0 1.43-.26 1.82-.26.58 0 .88.31.88.81v5.81c0 .64-.26 1.05-.85 1.34-.48.23-.91.31-1.8.31-2.08 0-3.4-1.03-5.45-1.03-.54 0-.95.09-1.19.18v3.3c0 .43-.31.77-.75.77" />
  </svg>
);
export default SvgFlagcirclefillBold;
