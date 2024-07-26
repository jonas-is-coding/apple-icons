import * as React from "react";
const SvgPoweroutlettypehfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.17-10.65a2.445 2.445 0 0 1 0-4.89 2.445 2.445 0 0 1 0 4.89m10.35 0c-1.35 0-2.45-1.1-2.45-2.45 0-1.33 1.1-2.44 2.45-2.44a2.445 2.445 0 0 1 0 4.89m-5.18 5.57c-1.34 0-2.43-1.1-2.43-2.45s1.09-2.44 2.43-2.44c1.35 0 2.45 1.09 2.45 2.44s-1.1 2.45-2.45 2.45" />
  </svg>
);
export default SvgPoweroutlettypehfillBold;
