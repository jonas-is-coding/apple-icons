import * as React from "react";
const SvgCheckmarkbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m4.36-9.22c-.52 0-.94-.24-1.31-.7l-2.75-3.28c-.26-.32-.38-.62-.38-.97 0-.71.58-1.29 1.31-1.29.42 0 .75.17 1.06.54l2.05 2.51 4.55-7.26c.32-.49.7-.73 1.16-.73.71 0 1.34.51 1.34 1.24 0 .29-.12.61-.32.91l-5.45 8.31c-.3.46-.75.72-1.26.72" />
  </svg>
);
export default SvgCheckmarkbubblefillBold;
