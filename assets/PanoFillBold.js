import * as React from "react";
const SvgPanofillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.422 21.71c2.5 0 5.5-2.96 13.26-2.96 7.74 0 10.76 2.95 13.25 2.95 1.55 0 2.43-.99 2.43-2.69V2.71c0-1.63-.83-2.59-2.31-2.59-2.4 0-5.63 2.83-13.37 2.83C7.932 2.95 4.652 0 2.422 0 .872 0 .002 1 .002 2.69v16.32c0 1.7.87 2.7 2.42 2.7" />
  </svg>
);
export default SvgPanofillBold;
