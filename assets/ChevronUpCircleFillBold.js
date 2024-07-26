import * as React from "react";
const SvgChevronupcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.03-9.42c-.45-.43-.45-1.22.04-1.72l4.53-4.85c.84-.9 2.1-.9 2.94-.01l4.53 4.85c.48.51.48 1.3.04 1.73-.52.52-1.31.52-1.78.01l-4.26-4.55-4.26 4.55c-.47.51-1.26.51-1.78-.01" />
  </svg>
);
export default SvgChevronupcirclefillBold;
