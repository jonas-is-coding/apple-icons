import * as React from "react";
const SvgPoweroutlettypeefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-16.11c-.96 0-1.73-.78-1.73-1.73 0-.96.77-1.75 1.73-1.75s1.75.79 1.75 1.75c0 .95-.79 1.73-1.75 1.73m-5.21 6.34c-1.34 0-2.44-1.1-2.44-2.45 0-1.33 1.1-2.45 2.44-2.45a2.46 2.46 0 0 1 2.45 2.45c0 1.35-1.09 2.45-2.45 2.45m10.42 0c-1.35 0-2.44-1.1-2.44-2.45 0-1.33 1.09-2.45 2.44-2.45 1.34 0 2.45 1.12 2.45 2.45a2.46 2.46 0 0 1-2.45 2.45" />
  </svg>
);
export default SvgPoweroutlettypeefillBold;
