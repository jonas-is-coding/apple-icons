import * as React from "react";
const SvgPlusbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m-.09-15.11c0-.79.58-1.38 1.37-1.38h3V6c0-.78.57-1.37 1.37-1.37.81 0 1.39.57 1.39 1.37v3h3c.79 0 1.36.59 1.36 1.38 0 .8-.57 1.37-1.36 1.37h-3v3.02c0 .78-.58 1.36-1.39 1.36-.8 0-1.37-.58-1.37-1.36v-3.02h-3c-.79 0-1.37-.57-1.37-1.37" />
  </svg>
);
export default SvgPlusbubblefillBold;
