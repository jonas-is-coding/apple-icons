import * as React from "react";
const SvgMagsafebatterypackBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.722 25.286h10.72c2.16 0 3.59-1.43 3.59-3.57V3.575c0-2.15-1.43-3.58-3.59-3.58H3.722c-2.23 0-3.72 1.43-3.72 3.57v18.16c0 2.13 1.49 3.56 3.72 3.56m.66-3.2c-.82 0-1.36-.49-1.36-1.28V4.485c0-.79.54-1.29 1.36-1.29h9.27c.82 0 1.36.51 1.36 1.3v16.29c0 .79-.54 1.3-1.36 1.3Zm4.64-7.65c2.81 0 5.11-2.28 5.11-5.11 0-2.81-2.3-5.1-5.11-5.1s-5.11 2.29-5.11 5.1c0 2.83 2.3 5.11 5.11 5.11m0-1.9c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.2 3.21-3.2 3.21 1.44 3.21 3.2c0 1.77-1.44 3.21-3.21 3.21m0 7.42c.51 0 .93-.42.93-.94v-2.07c0-.52-.42-.94-.93-.94s-.94.42-.94.94v2.07c0 .52.43.94.94.94" />
  </svg>
);
export default SvgMagsafebatterypackBold;
