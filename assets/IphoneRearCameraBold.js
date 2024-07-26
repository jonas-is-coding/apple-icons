import * as React from "react";
const SvgIphonerearcameraBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm3.02-.92V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27m3.2-14.55c.9 0 1.67-.76 1.67-1.71 0-.89-.77-1.66-1.67-1.66-.94 0-1.71.77-1.71 1.66 0 .95.77 1.71 1.71 1.71" />
  </svg>
);
export default SvgIphonerearcameraBold;
