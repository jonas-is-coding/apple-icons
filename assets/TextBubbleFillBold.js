import * as React from "react";
const SvgTextbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m-.5-18.07c-.46 0-.85-.4-.85-.87s.39-.85.85-.85h12.22c.48 0 .87.38.87.85s-.39.87-.87.87Zm0 3.78c-.46 0-.85-.41-.85-.88 0-.45.39-.86.85-.86h12.22c.48 0 .87.4.87.86 0 .47-.39.88-.87.88Zm0 3.78c-.46 0-.85-.4-.85-.87s.39-.87.85-.87h7.99c.48 0 .85.39.85.87 0 .47-.37.87-.85.87Z" />
  </svg>
);
export default SvgTextbubblefillBold;
