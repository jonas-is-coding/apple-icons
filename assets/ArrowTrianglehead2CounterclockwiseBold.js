import * as React from "react";
const SvgArrowtrianglehead2CounterclockwiseBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.752 14.358c0-6.06-4.36-11.11-10.1-12.15V.928c0-.94-.8-1.17-1.47-.67l-3.88 2.9c-.5.37-.5.99 0 1.36l3.89 2.89c.66.49 1.46.26 1.46-.66v-1.38c4.03 1 7.02 4.63 7.02 8.99 0 2.31-.88 4.42-2.32 5.98-.66.9-.43 1.71.1 2.19.6.52 1.62.59 2.26-.24 1.89-2.08 3.04-4.87 3.04-7.93m-24.75 0c0 6.06 4.36 11.1 10.1 12.15v1.28c0 .94.8 1.17 1.46.67l3.88-2.9c.51-.37.51-.99 0-1.36l-3.88-2.89c-.66-.49-1.46-.27-1.46.65v1.39a9.26 9.26 0 0 1-7.02-8.99c0-2.31.88-4.42 2.32-5.99.66-.89.43-1.7-.11-2.18-.59-.53-1.6-.6-2.26.24a11.85 11.85 0 0 0-3.03 7.93" />
  </svg>
);
export default SvgArrowtrianglehead2CounterclockwiseBold;
