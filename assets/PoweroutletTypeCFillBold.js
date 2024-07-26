import * as React from "react";
const SvgPoweroutlettypecfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.85-9.93c-1.35 0-2.45-1.09-2.45-2.44s1.1-2.45 2.45-2.45 2.45 1.1 2.45 2.45-1.1 2.44-2.45 2.44m9.7 0c-1.34 0-2.44-1.09-2.44-2.44s1.1-2.45 2.44-2.45c1.35 0 2.44 1.1 2.44 2.45s-1.09 2.44-2.44 2.44" />
  </svg>
);
export default SvgPoweroutlettypecfillBold;
