import * as React from "react";
const SvgMoonphasewaningcrescentinverseBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.83-12.36c0-3.96 1.54-7.22 4.27-9.26 5.05.3 8.86 4.25 8.86 9.25.01 5.01-3.81 8.98-8.9 9.26-2.71-2.02-4.23-5.26-4.23-9.25" />
  </svg>
);
export default SvgMoonphasewaningcrescentinverseBold;
