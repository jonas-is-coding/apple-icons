import * as React from "react";
const SvgWrongwaysignfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.89-9.4c-.67 0-1.16-.49-1.16-1.16v-3.64c0-.66.49-1.16 1.16-1.16h11.8c.67 0 1.16.5 1.16 1.16v3.61c0 .68-.49 1.19-1.16 1.19Z" />
  </svg>
);
export default SvgWrongwaysignfillBold;
