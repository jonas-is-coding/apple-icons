import * as React from "react";
const SvgIphonelandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.552 17.39h19.99c2.12 0 3.55-1.48 3.55-3.69V3.55c0-2.13-1.43-3.55-3.56-3.55H3.562C1.432 0 .002 1.42.002 3.55V13.7c0 2.21 1.43 3.69 3.55 3.69m.94-3.02c-.82 0-1.29-.49-1.29-1.33V4.35c0-.83.48-1.33 1.29-1.33h18.11c.81 0 1.29.5 1.29 1.33v8.69c0 .84-.47 1.33-1.27 1.33Zm.68-3.07c.59 0 1.03-.45 1.03-1.03V7.13c0-.59-.44-1.04-1.03-1.04s-1.03.45-1.03 1.04v3.14c0 .58.44 1.03 1.03 1.03m5.3 2.06h6.16c.38 0 .67-.27.67-.68 0-.4-.29-.67-.67-.67h-6.16c-.38 0-.66.27-.66.67 0 .41.28.68.66.68" />
  </svg>
);
export default SvgIphonelandscapeBold;
