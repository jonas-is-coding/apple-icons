import * as React from "react";
const SvgBeatspowerbeatsleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.362 25.08v-4.19c.99-.91 1.69-4.23 1.69-7.26 0-7.45-4.43-13.63-9.79-13.63-3.49 0-5.26 2.52-5.26 6.48v2.61c0 2.89.72 4.25 2.75 5.37l4.69 2.57c1.21.65 1.77.86 2.61.86 1.75 0 3.19-1.46 3.19-3.23 0-1.17-.63-2.3-1.98-2.99l-9.07-4.73c0-3.14.98-4.75 3.19-4.75 3.64 0 6.84 4.18 7.36 9.07 1.06.87 1.68 2.06 1.68 3.4 0 2.11-1.5 3.89-3.46 4.31.1.66.45 1.36.93 1.78v4.33Zm-3.26-8.42c-1.1 0-2-.9-2-2s.9-2 2-2a2 2 0 1 1 0 4m0-.9c.61 0 1.1-.5 1.1-1.1s-.49-1.09-1.1-1.09-1.1.49-1.1 1.09.49 1.1 1.1 1.1" />
  </svg>
);
export default SvgBeatspowerbeatsleftBold;
