import * as React from "react";
const SvgIphoneandarrowforwardoutwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.392 17.141h-3.02v5.46c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v5.48h3.02v-6.42c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56v19.98c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55Zm-8.22-3.58c0 .76.63 1.36 1.34 1.36h9.43l1.73-.12-.84.55-1.53 1.43c-.25.22-.39.55-.39.89 0 .62.47 1.17 1.14 1.17.34 0 .59-.14.82-.37l3.69-3.83c.35-.37.47-.72.47-1.08 0-.37-.12-.72-.47-1.07l-3.69-3.84c-.23-.24-.48-.37-.82-.37-.67 0-1.14.57-1.14 1.19 0 .33.14.64.39.88l1.53 1.43.84.55-1.73-.12h-9.43c-.71 0-1.34.6-1.34 1.35" />
  </svg>
);
export default SvgIphoneandarrowforwardoutwardBold;
