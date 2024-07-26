import * as React from "react";
const SvgCirclebadgeminusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.766c1.6 0 3.13-.32 4.54-.88a7.92 7.92 0 0 1-2.12-5.37c0-4.35 3.58-7.93 7.93-7.93q1.005 0 1.92.24c-.77-6.07-6.01-10.83-12.28-10.83-6.78 0-12.36 5.59-12.36 12.38 0 6.8 5.58 12.39 12.37 12.39m10.35-.07c3.36 0 6.18-2.82 6.18-6.18 0-3.38-2.79-6.16-6.18-6.16-3.37 0-6.16 2.78-6.16 6.16 0 3.37 2.79 6.18 6.16 6.18m-3.03-5.23c-.51 0-.94-.45-.94-.95-.01-.49.43-.94.94-.94h6.09c.5 0 .92.44.92.94s-.42.95-.92.95Z" />
  </svg>
);
export default SvgCirclebadgeminusfillBold;
