import * as React from "react";
const SvgExclamationmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.382 15.509c1.13 0 1.78-.7 1.81-1.87l.2-11.21c.01-.14.01-.31.01-.42 0-1.26-.79-2.01-2.02-2.01s-2.04.75-2.04 2.01c0 .11 0 .28.01.42l.21 11.21c.04 1.17.67 1.87 1.82 1.87m0 6.9c1.3 0 2.35-1.01 2.35-2.29 0-1.26-1.05-2.27-2.35-2.27-1.32 0-2.38 1.01-2.38 2.27 0 1.28 1.06 2.29 2.38 2.29" />
  </svg>
);
export default SvgExclamationmarkBold;
