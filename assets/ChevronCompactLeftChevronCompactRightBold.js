import * as React from "react";
const SvgChevroncompactleftchevroncompactrightBold = ({
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
    <path d="M13.582 21.748c.7 0 1.25-.44 1.54-1.06l3.35-7.77c.34-.77.58-1.33.58-2.04 0-.72-.24-1.29-.58-2.05l-3.35-7.76c-.29-.62-.84-1.07-1.54-1.07-1.16 0-1.93.85-1.93 1.83 0 .54.32 1.24.58 1.82l3.1 7.23-3.1 7.23c-.26.57-.58 1.26-.58 1.81 0 .99.77 1.83 1.93 1.83m-8.11 0c1.17 0 1.93-.84 1.93-1.83 0-.55-.31-1.24-.58-1.81l-3.08-7.23 3.08-7.23c.27-.58.58-1.28.58-1.82 0-.98-.76-1.83-1.93-1.83-.69 0-1.25.45-1.53 1.07l-3.36 7.76c-.34.76-.58 1.33-.58 2.05 0 .71.24 1.27.58 2.04l3.36 7.77c.28.62.84 1.06 1.53 1.06" />
  </svg>
);
export default SvgChevroncompactleftchevroncompactrightBold;
