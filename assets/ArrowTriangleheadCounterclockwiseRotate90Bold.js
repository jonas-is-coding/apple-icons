import * as React from "react";
const SvgArrowtriangleheadcounterclockwiserotate90Bold = ({
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
    <path d="M.93 9.946c-.94 0-1.18.79-.67 1.47l2.9 3.88c.37.5.99.49 1.36 0l2.89-3.89c.49-.67.27-1.46-.66-1.46H5.36a9.27 9.27 0 0 1 8.97-6.86c5.14 0 9.3 4.14 9.3 9.29 0 5.13-4.16 9.29-9.3 9.29-2.81 0-5.26-1.23-6.98-3.23-.66-.67-1.57-.88-2.29-.27-.64.54-.7 1.49 0 2.31 2.04 2.59 5.72 4.27 9.27 4.27 6.83 0 12.38-5.54 12.38-12.37S21.16-.004 14.33-.004c-6 0-11.01 4.28-12.14 9.95Z" />
  </svg>
);
export default SvgArrowtriangleheadcounterclockwiserotate90Bold;
