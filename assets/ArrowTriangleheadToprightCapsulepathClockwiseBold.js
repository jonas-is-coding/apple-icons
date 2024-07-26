import * as React from "react";
const SvgArrowtriangleheadtoprightcapsulepathclockwiseBold = ({
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
    <path d="M7.759 26.311c4.63 0 7.75-3.12 7.75-7.77v-1.55c0-.82-.66-1.48-1.48-1.48s-1.48.66-1.48 1.48v1.55c0 2.9-1.91 4.8-4.79 4.8-2.9 0-4.81-1.9-4.81-4.8v-10.8c0-2.88 1.91-4.79 4.81-4.79 2.88 0 4.79 1.91 4.79 4.79v.25h-1.42c-.91 0-1.14.8-.65 1.45l2.89 3.89c.37.51.99.51 1.36 0l2.91-3.87c.5-.67.27-1.47-.67-1.47h-1.46v-.25c0-4.62-3.12-7.74-7.75-7.74-4.64 0-7.76 3.12-7.76 7.74v10.8c0 4.65 3.12 7.77 7.76 7.77" />
  </svg>
);
export default SvgArrowtriangleheadtoprightcapsulepathclockwiseBold;
