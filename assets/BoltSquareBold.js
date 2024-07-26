import * as React from "react";
const SvgBoltsquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm2-7.47c0 .33.26.58.6.58h3.49l-1.86 4.91c-.3.81.58 1.28 1.13.62l5.87-7.2c.13-.15.2-.32.2-.49 0-.34-.27-.58-.61-.58h-3.48l1.85-4.9c.31-.82-.57-1.29-1.12-.64l-5.88 7.2c-.12.15-.19.33-.19.5" />
  </svg>
);
export default SvgBoltsquareBold;
