import * as React from "react";
const SvgIphoneappswitcherBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.872 27.091h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56h-10.15c-2.21 0-3.7 1.43-3.7 3.56v19.98c0 2.13 1.49 3.55 3.7 3.55m-6.43-4.46V4.461c0-1.57.76-2.83 1.93-3.42-2.87.04-4.32 1.45-4.32 3.54v17.94c0 2.09 1.45 3.51 4.32 3.54-1.17-.58-1.93-1.85-1.93-3.43m-5.05-1.71V6.191c0-1.57.75-2.85 1.92-3.44-2.86.04-4.31 1.46-4.31 3.55v14.5c0 2.1 1.45 3.52 4.31 3.55-1.17-.59-1.92-1.86-1.92-3.43m12.14 2.97c-.83 0-1.34-.45-1.34-1.27V4.491c0-.82.51-1.28 1.34-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29Z" />
  </svg>
);
export default SvgIphoneappswitcherBold;
