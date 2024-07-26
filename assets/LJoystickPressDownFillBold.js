import * as React from "react";
const SvgLjoystickpressdownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m9.682 1.626 2.56 3.39c.37.48 1.02.47 1.39 0l2.57-3.39c.56-.71.25-1.63-.71-1.63h-5.11c-.93 0-1.25.91-.7 1.63m3.21 21.4c8.06 0 12.9-3.63 12.9-8.12s-4.84-8.12-12.91-8.12c-8.04 0-12.88 3.63-12.88 8.12s4.84 8.12 12.89 8.12m-1.53-4.06c-.87 0-1.4-.58-1.4-1.54v-5.53c0-.96.54-1.54 1.4-1.54.88 0 1.4.59 1.4 1.54v4.82h2.4c.73 0 1.2.43 1.2 1.12s-.47 1.13-1.2 1.13Zm1.53 9.94c3.31 0 5.39-1.55 5.39-4.2v-.37c-1.65.39-3.46.59-5.39.59-1.92 0-3.73-.2-5.38-.59v.37c0 2.65 2.06 4.2 5.38 4.2" />
  </svg>
);
export default SvgLjoystickpressdownfillBold;
