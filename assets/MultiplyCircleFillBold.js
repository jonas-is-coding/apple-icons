import * as React from "react";
const SvgMultiplycirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.69-7.33c-.75 0-1.33-.6-1.33-1.36 0-.34.14-.68.39-.93l2.73-2.73-2.73-2.73c-.25-.26-.39-.58-.39-.92 0-.78.58-1.35 1.33-1.35.41 0 .72.13.99.39l2.7 2.7 2.73-2.7c.28-.29.59-.4.99-.4.75 0 1.33.58 1.33 1.33 0 .35-.13.68-.39.94l-2.74 2.74 2.72 2.72c.27.26.41.59.41.94 0 .76-.58 1.36-1.34 1.36-.4 0-.74-.14-1-.4l-2.71-2.71-2.69 2.71c-.26.26-.59.4-1 .4" />
  </svg>
);
export default SvgMultiplycirclefillBold;
