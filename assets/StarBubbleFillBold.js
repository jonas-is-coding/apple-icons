import * as React from "react";
const SvgStarbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m3.14-10.47c-.59.43-1.27.04-1-.72l1-2.98-2.59-1.85c-.56-.39-.37-1.16.36-1.16l3.2.01.96-2.98c.24-.69.99-.7 1.22 0l.95 2.98 3.19-.01c.76 0 .91.76.36 1.16l-2.58 1.85 1 2.98c.27.78-.41 1.13-.98.72l-2.55-1.86Z" />
  </svg>
);
export default SvgStarbubblefillBold;
