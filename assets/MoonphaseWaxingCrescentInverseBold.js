import * as React from "react";
const SvgMoonphasewaxingcrescentinverseBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.85-12.36c0 3.99-1.54 7.23-4.25 9.25-5.07-.28-8.9-4.25-8.89-9.26.01-5 3.82-8.95 8.87-9.25 2.72 2.04 4.27 5.3 4.27 9.26" />
  </svg>
);
export default SvgMoonphasewaxingcrescentinverseBold;
