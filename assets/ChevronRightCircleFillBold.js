import * as React from "react";
const SvgChevronrightcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.74-6.32c-.52-.52-.48-1.3 0-1.77l4.56-4.27-4.56-4.25c-.49-.47-.49-1.29.02-1.77.47-.44 1.22-.44 1.73.03l4.84 4.53c.83.78.83 2.15 0 2.94l-4.84 4.53c-.46.42-1.33.44-1.75.03" />
  </svg>
);
export default SvgChevronrightcirclefillBold;
