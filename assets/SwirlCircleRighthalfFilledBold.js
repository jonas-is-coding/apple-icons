import * as React from "react";
const SvgSwirlcirclerighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-4.78 3.6-8.72 8.24-9.24-1.99.49-3.61 2.28-3.61 4.55 0 2.09 1.79 3.89 4.67 4.69 2.88.81 4.69 2.62 4.69 4.69 0 2.19-1.51 4.03-3.56 4.53-.38.05-.75.07-1.14.07m.01.07h.03z" />
  </svg>
);
export default SvgSwirlcirclerighthalffilledBold;
