import * as React from "react";
const SvgDiamondlefthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m12.35-13.43c.34-.01.68.16 1.03.51l8.96 8.97c.68.67.71 1.34 0 2.05l-8.96 8.94c-.35.37-.69.53-1.03.53Z" />
  </svg>
);
export default SvgDiamondlefthalffilledBold;
