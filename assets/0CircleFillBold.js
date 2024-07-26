import * as React from "react";
const Svg0CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.02-6.8c-2.71 0-4.47-2.2-4.47-5.57 0-3.39 1.76-5.57 4.47-5.57s4.51 2.18 4.51 5.57c0 3.37-1.8 5.57-4.51 5.57m.02-2.24c1.02 0 1.73-1.14 1.73-3.33s-.71-3.33-1.73-3.33-1.72 1.14-1.72 3.33.7 3.33 1.72 3.33" />
  </svg>
);
export default Svg0CirclefillBold;
