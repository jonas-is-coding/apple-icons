import * as React from "react";
const SvgMinuscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.39-10.96c-.82 0-1.43-.57-1.43-1.39s.58-1.38 1.43-1.38h8.8c.84 0 1.42.56 1.42 1.38s-.59 1.39-1.42 1.39Z" />
  </svg>
);
export default SvgMinuscirclefillBold;
