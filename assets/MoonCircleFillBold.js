import * as React from "react";
const SvgMooncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m.14-5.73c-3.55 0-6.43-2.89-6.43-6.44 0-2.65 1.62-4.98 4.02-5.97.15-.06.32-.1.44-.1.29 0 .47.19.47.46 0 .13-.04.28-.13.43-.28.65-.44 1.47-.44 2.26 0 3.11 2.03 5.08 5.21 5.08.73 0 1.45-.18 1.89-.33.21-.07.35-.12.5-.12.23 0 .45.2.45.47 0 .13-.01.26-.11.47a6.45 6.45 0 0 1-5.87 3.79" />
  </svg>
);
export default SvgMooncirclefillBold;
