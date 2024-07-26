import * as React from "react";
const SvgXmarkrectangleportraitfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm6.7-3.72c-.75 0-1.33-.59-1.33-1.35 0-.34.14-.68.39-.93l2.73-2.73-2.73-2.73c-.25-.25-.39-.59-.39-.93 0-.77.58-1.34 1.33-1.34.41 0 .72.13.99.39l2.7 2.7 2.73-2.7c.28-.28.59-.4.99-.4.75 0 1.33.58 1.33 1.33 0 .36-.13.67-.39.94l-2.74 2.74 2.72 2.72c.27.25.4.59.4.94 0 .76-.58 1.35-1.33 1.35-.41 0-.74-.13-1-.39l-2.71-2.71-2.69 2.71c-.26.26-.59.39-1 .39" />
  </svg>
);
export default SvgXmarkrectangleportraitfillBold;
