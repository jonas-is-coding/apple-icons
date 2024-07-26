import * as React from "react";
const SvgChartpiefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13.312 10.83 9.34-5.34c-2.05-3.11-5.57-5.21-9.34-5.49Zm-.94 13.89c2.82 0 5.46-.97 7.61-2.65l-8.69-8.44c-.25-.26-.37-.48-.37-.94V.06C4.802.77.002 6.04.002 12.34c0 6.79 5.59 12.38 12.37 12.38m12.38-12.39c0-1.64-.34-3.29-.97-4.72l-9.51 5.43 7.49 7.32c1.86-2.15 2.99-5 2.99-8.03" />
  </svg>
);
export default SvgChartpiefillBold;
