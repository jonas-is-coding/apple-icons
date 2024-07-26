import * as React from "react";
const SvgDiamondtophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m22.86-2.93c0 .33-.17.68-.52 1.03l-8.96 8.94c-.7.72-1.37.69-2.05.01l-8.95-8.96c-.34-.34-.52-.68-.52-1.02Z" />
  </svg>
);
export default SvgDiamondtophalffilledBold;
