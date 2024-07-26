import * as React from "react";
const SvgSparkleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.18 24.347c.64 0 1.16-.46 1.25-1.13 1.08-7.82 2.17-8.92 9.74-9.78.68-.08 1.18-.6 1.18-1.26s-.5-1.18-1.17-1.28c-7.55-.94-8.57-1.94-9.75-9.76-.11-.67-.62-1.14-1.25-1.14-.65 0-1.16.47-1.27 1.14-1.08 7.82-2.16 8.92-9.73 9.76-.68.08-1.18.62-1.18 1.28s.49 1.17 1.17 1.26c7.56 1.05 8.53 1.97 9.74 9.78.13.68.63 1.13 1.27 1.13" />
  </svg>
);
export default SvgSparkleBold;
