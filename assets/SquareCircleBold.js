import * as React from "react";
const SvgSquarecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.88-3.64h7.76c1.15 0 1.78-.67 1.78-1.88v-7.67c0-1.13-.63-1.75-1.78-1.75h-7.76c-1.06 0-1.77.69-1.77 1.75v7.67c0 1.13.71 1.88 1.77 1.88m.99-2.31a.43.43 0 0 1-.45-.45v-5.79c0-.27.19-.44.45-.44h5.79c.27 0 .44.17.44.44v5.79c0 .27-.17.45-.44.45Z" />
  </svg>
);
export default SvgSquarecircleBold;
