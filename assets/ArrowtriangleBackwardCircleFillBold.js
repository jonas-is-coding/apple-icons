import * as React from "react";
const SvgArrowtrianglebackwardcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.8-11.36a1.16 1.16 0 0 1 0-2.02l6.55-3.87c.82-.49 1.8-.07 1.8.89v7.96c0 .96-.97 1.4-1.8.89Z" />
  </svg>
);
export default SvgArrowtrianglebackwardcirclefillBold;
