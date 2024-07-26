import * as React from "react";
const SvgZcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.01-4.1h6.2c.76 0 1.27-.44 1.27-1.15 0-.7-.5-1.12-1.27-1.12h-3.94v-.12l4.34-5.61c.42-.48.51-.74.51-1.23 0-.74-.52-1.25-1.3-1.25h-5.98c-.78 0-1.27.43-1.27 1.14 0 .72.5 1.14 1.27 1.14h3.75v.11l-4.33 5.61c-.39.48-.53.8-.53 1.26 0 .72.53 1.22 1.28 1.22" />
  </svg>
);
export default SvgZcircleBold;
