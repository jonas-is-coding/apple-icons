import * as React from "react";
const SvgArrowtriangledowncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.01-7.8-3.86-6.55c-.48-.82-.07-1.81.88-1.81h7.97c.96 0 1.38.98.89 1.81l-3.86 6.55c-.47.8-1.56.76-2.02 0" />
  </svg>
);
export default SvgArrowtriangledowncirclefillBold;
