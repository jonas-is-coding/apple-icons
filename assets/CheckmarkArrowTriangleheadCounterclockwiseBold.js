import * as React from "react";
const SvgCheckmarkarrowtriangleheadcounterclockwiseBold = ({
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
    <path d="M12.372 26.772c6.83 0 12.38-5.55 12.38-12.37 0-5.93-4.17-10.89-9.72-12.08v-1.4c0-.94-.79-1.17-1.46-.65l-3.88 2.89c-.5.36-.49.99 0 1.36l3.89 2.88c.66.51 1.45.27 1.45-.65v-1.23a9.236 9.236 0 0 1 6.64 8.88c0 5.13-4.15 9.29-9.3 9.29a9.29 9.29 0 0 1-9.29-9.29c0-2.81 1.23-5.25 3.23-6.99.67-.66.89-1.57.29-2.28-.56-.65-1.54-.74-2.32 0a12.19 12.19 0 0 0-4.28 9.27c0 6.82 5.54 12.37 12.37 12.37m-1.22-6.79c.48 0 .91-.25 1.19-.67l5.04-7.77c.18-.28.3-.57.3-.86 0-.69-.61-1.17-1.26-1.17-.44 0-.8.24-1.09.71l-4.21 6.77-1.95-2.4c-.29-.37-.61-.52-1-.52-.68 0-1.23.54-1.23 1.22 0 .33.11.61.36.91l2.61 3.13c.35.42.74.65 1.24.65" />
  </svg>
);
export default SvgCheckmarkarrowtriangleheadcounterclockwiseBold;
