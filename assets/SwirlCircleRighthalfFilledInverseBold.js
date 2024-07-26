import * as React from "react";
const SvgSwirlcirclerighthalffilledinverseBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-21.73h-.02zm4.67 14.05c0-2.1-1.8-3.89-4.67-4.69-2.88-.82-4.7-2.63-4.7-4.69 0-2.19 1.52-4.04 3.58-4.53.36-.05.74-.07 1.12-.07 5.15 0 9.3 4.14 9.3 9.29 0 4.78-3.6 8.71-8.24 9.23 2-.48 3.61-2.27 3.61-4.54" />
  </svg>
);
export default SvgSwirlcirclerighthalffilledinverseBold;
