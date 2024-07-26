import * as React from "react";
const SvgChevroncompactleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.942 20.688c.28.62.84 1.06 1.53 1.06 1.17 0 1.93-.84 1.93-1.83 0-.55-.31-1.24-.58-1.81l-3.08-7.23 3.08-7.23c.27-.58.58-1.28.58-1.82 0-.98-.76-1.83-1.93-1.83-.69 0-1.25.45-1.53 1.07l-3.36 7.76c-.34.76-.58 1.33-.58 2.05 0 .71.24 1.27.58 2.04Z" />
  </svg>
);
export default SvgChevroncompactleftBold;
