import * as React from "react";
const SvgArrowtriangleupcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.98-8.39c-.95 0-1.37-.98-.88-1.8l3.85-6.55c.47-.78 1.56-.8 2.03 0l3.86 6.55c.49.83.06 1.8-.89 1.8Z" />
  </svg>
);
export default SvgArrowtriangleupcirclefillBold;
