import * as React from "react";
const SvgArrowturndownleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M20.522-.002c-.99 0-1.63.67-1.63 1.68 0 .5.06 1.09.06 1.9 0 3.19-1.17 4.5-4.35 4.5h-6.75l-2.67.16 2.69-2.43 2.62-2.61c.3-.32.52-.71.52-1.22 0-.91-.68-1.62-1.67-1.62-.41 0-.83.19-1.19.53l-7.62 7.63c-.33.32-.53.8-.53 1.25 0 .46.2.94.53 1.26l7.61 7.62c.37.36.79.54 1.2.54.99 0 1.67-.7 1.67-1.61 0-.52-.21-.91-.52-1.22l-2.62-2.62-2.69-2.42 2.67.15h7.01c5.19 0 7.51-2.61 7.51-7.86 0-.68-.04-1.34-.14-1.99-.13-.74-.6-1.62-1.71-1.62" />
  </svg>
);
export default SvgArrowturndownleftBold;
