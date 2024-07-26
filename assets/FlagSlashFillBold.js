import * as React from "react";
const SvgFlagslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.863 22.244c.39.4 1.04.37 1.4 0 .39-.4.37-1.01 0-1.4L1.683.294a.987.987 0 0 0-1.41 0 1.02 1.02 0 0 0 0 1.39ZM5.753 2.114l16.11 16.1q.33-.57.33-1.35V5.534c0-.99-.68-1.65-1.67-1.65-.8 0-1.81.38-3.49.38-3.94 0-7.17-2.11-11.28-2.15m-5.15 22.2c0 .79.65 1.43 1.42 1.43s1.42-.63 1.42-1.43v-6.22c.35-.1 1.17-.36 2.32-.36 3.84 0 6.7 1.85 10.48 2.12L.733 4.364c-.08.16-.13.34-.13.55Z" />
  </svg>
);
export default SvgFlagslashfillBold;
