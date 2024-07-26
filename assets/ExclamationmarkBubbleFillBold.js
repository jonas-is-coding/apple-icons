import * as React from "react";
const SvgExclamationmarkbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m5.66-13.36c-.82 0-1.3-.45-1.35-1.28l-.19-5.07c-.03-.88.59-1.48 1.53-1.48.92 0 1.57.61 1.53 1.49l-.2 5.05c-.04.84-.51 1.29-1.32 1.29m0 4.24c-.93 0-1.66-.6-1.66-1.49s.72-1.49 1.66-1.49 1.65.6 1.65 1.49c0 .91-.71 1.49-1.65 1.49" />
  </svg>
);
export default SvgExclamationmarkbubblefillBold;
