import * as React from "react";
const SvgPersonbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m5.25-15.29c-1.65 0-3-1.41-3-3.27 0-1.76 1.35-3.2 3-3.2s3 1.44 3 3.2c0 1.86-1.35 3.28-3 3.27m-5.03 6.38c-.61 0-.91-.43-.91-.97 0-1.27 1.83-4.52 5.94-4.52s5.94 3.25 5.94 4.52c0 .54-.3.97-.91.97Z" />
  </svg>
);
export default SvgPersonbubblefillBold;
