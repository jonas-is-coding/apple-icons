import * as React from "react";
const SvgDropcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-3.63c2.45 0 4.07-1.59 4.07-3.97 0-1.03-.41-2.05-.83-2.97-.62-1.32-1.57-2.86-2.44-4.18-.23-.35-.5-.54-.8-.54s-.57.19-.81.54c-.86 1.32-1.81 2.87-2.42 4.19-.42.91-.85 1.93-.85 2.96 0 2.38 1.63 3.97 4.08 3.97" />
  </svg>
);
export default SvgDropcircleBold;
