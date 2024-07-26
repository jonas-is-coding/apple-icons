import * as React from "react";
const SvgPlatter2FillediphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm3.02-.92V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27m2.6-11.36h6.16c.62 0 1.03-.41 1.03-1.05v-2.34c0-.65-.41-1.06-1.03-1.06h-6.16c-.62 0-1.04.41-1.04 1.06v2.34c0 .64.42 1.05 1.04 1.05m0 9.02h6.16c.62 0 1.03-.41 1.03-1.05v-2.33c0-.65-.41-1.07-1.03-1.07h-6.16c-.62 0-1.04.42-1.04 1.07v2.33c0 .64.42 1.05 1.04 1.05" />
  </svg>
);
export default SvgPlatter2FillediphoneBold;
