import * as React from "react";
const SvgChevroncompactupchevroncompactdownBold = ({
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
    <path d="M1.082 3.936c-.64.28-1.08.83-1.08 1.54.01 1.16.84 1.92 1.83 1.92.55 0 1.24-.32 1.82-.58l7.22-3.09 7.23 3.09c.58.26 1.28.58 1.82.58.98 0 1.83-.76 1.84-1.92 0-.71-.45-1.26-1.08-1.54l-7.76-3.35c-.76-.35-1.33-.59-2.05-.59-.7 0-1.27.24-2.04.59Zm0 11.42 7.75 3.35c.77.34 1.34.58 2.04.58.72 0 1.29-.24 2.05-.58l7.76-3.35c.63-.29 1.08-.85 1.08-1.54-.01-1.17-.86-1.93-1.84-1.93-.54 0-1.24.31-1.82.58l-7.23 3.1-7.22-3.1c-.58-.27-1.27-.58-1.82-.58-.99 0-1.82.76-1.83 1.93 0 .69.44 1.25 1.08 1.54" />
  </svg>
);
export default SvgChevroncompactupchevroncompactdownBold;
