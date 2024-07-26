import * as React from "react";
const SvgChevronbackwardtolineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.552 19.48v-8.49c.07.41.27.76.63 1.08l9.21 8.67c.44.4.83.52 1.28.52 1.03 0 1.89-.82 1.89-1.84 0-.58-.24-1.03-.61-1.38l-7.9-7.41 7.9-7.41c.37-.34.61-.81.61-1.38 0-1.03-.86-1.84-1.89-1.84-.45 0-.84.12-1.28.52l-9.22 8.67c-.35.31-.55.67-.62 1.08V1.79C3.552.74 2.782 0 1.782 0 .772 0 .002.74.002 1.79v17.69c0 1.04.78 1.78 1.78 1.78s1.77-.74 1.77-1.78" />
  </svg>
);
export default SvgChevronbackwardtolineBold;
