import * as React from "react";
const SvgPillcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m4.9-17.27c1.36 1.33 1.35 3.2-.06 4.62l-2.19 2.18-4.56-4.55 2.17-2.18c1.42-1.44 3.27-1.43 4.64-.07m-9.81 9.82c-1.36-1.34-1.33-3.21.07-4.64l2.19-2.18 4.54 4.55-2.16 2.18c-1.43 1.42-3.29 1.43-4.64.09" />
  </svg>
);
export default SvgPillcirclefillBold;
