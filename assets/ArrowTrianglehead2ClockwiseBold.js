import * as React from "react";
const SvgArrowtrianglehead2ClockwiseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.358c0 3.06 1.16 5.85 3.03 7.93.66.83 1.67.76 2.26.24.54-.48.77-1.29.11-2.19a8.8 8.8 0 0 1-2.32-5.98c0-4.36 2.99-7.99 7.02-8.99v1.38c0 .92.8 1.15 1.46.66l3.88-2.89c.51-.37.51-.99 0-1.36l-3.88-2.9c-.66-.5-1.46-.27-1.46.67v1.28c-5.74 1.04-10.1 6.09-10.1 12.15m24.75 0c0-3.06-1.15-5.85-3.04-7.93-.64-.84-1.66-.77-2.26-.24-.53.48-.76 1.29-.1 2.18a8.84 8.84 0 0 1 2.32 5.99 9.26 9.26 0 0 1-7.02 8.99v-1.39c0-.92-.8-1.14-1.46-.65l-3.89 2.89c-.5.37-.5.99 0 1.36l3.88 2.9c.67.5 1.47.27 1.47-.67v-1.28c5.74-1.05 10.1-6.09 10.1-12.15" />
  </svg>
);
export default SvgArrowtrianglehead2ClockwiseBold;
