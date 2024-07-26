import * as React from "react";
const SvgIphoneandarrowforwardinwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.334 17.141h-3.02v6.4c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H8.004c-2.21 0-3.69 1.43-3.69 3.56v6.42h3.02v-5.49c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27Zm-7.33-3.58c0 .76.61 1.36 1.32 1.36h9.3l1.73-.12-.85.55-1.52 1.43c-.25.22-.39.55-.39.89 0 .62.46 1.17 1.13 1.17.35 0 .6-.14.83-.37l3.68-3.83c.35-.37.48-.72.48-1.08 0-.37-.13-.72-.48-1.07l-3.68-3.84c-.23-.24-.48-.37-.83-.37-.67 0-1.13.57-1.13 1.19 0 .33.14.64.39.88l1.52 1.43.85.55-1.73-.12h-9.3c-.71 0-1.32.6-1.32 1.35" />
  </svg>
);
export default SvgIphoneandarrowforwardinwardBold;
