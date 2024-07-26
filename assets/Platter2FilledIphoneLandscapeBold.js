import * as React from "react";
const SvgPlatter2FillediphonelandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.562 17.41h19.97c2.13 0 3.56-1.43 3.56-3.56V3.7c0-2.21-1.43-3.7-3.55-3.7H3.552C1.432 0 .002 1.49.002 3.7v10.15c0 2.13 1.43 3.56 3.56 3.56m.93-3.02c-.81 0-1.29-.5-1.29-1.32V4.36c0-.83.47-1.34 1.29-1.34h18.13c.8 0 1.27.51 1.27 1.34v8.71c0 .82-.48 1.32-1.29 1.32Zm2.08-3.36h5.05c.61 0 1.03-.41 1.03-1.07V7.44c0-.64-.42-1.06-1.03-1.06h-5.05c-.62 0-1.04.42-1.04 1.06v2.52c0 .66.42 1.07 1.04 1.07m8.91 0h5.05c.61 0 1.03-.41 1.03-1.07V7.44c0-.64-.42-1.06-1.03-1.06h-5.05c-.62 0-1.04.42-1.04 1.06v2.52c0 .66.42 1.07 1.04 1.07" />
  </svg>
);
export default SvgPlatter2FillediphonelandscapeBold;
