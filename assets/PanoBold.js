import * as React from "react";
const SvgPanoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.422 21.71c2.5 0 5.5-2.96 13.26-2.96 7.74 0 10.76 2.95 13.25 2.95 1.55 0 2.43-.99 2.43-2.69V2.71c0-1.63-.83-2.59-2.31-2.59-2.4 0-5.63 2.83-13.37 2.83C7.932 2.95 4.652 0 2.422 0 .872 0 .002 1 .002 2.69v16.32c0 1.7.87 2.7 2.42 2.7m.92-3.32c-.21 0-.32-.12-.32-.39V3.71c0-.28.11-.39.32-.39.91 0 4.51 2.4 12.34 2.4 7.81 0 11.62-2.4 12.34-2.4.21 0 .31.11.31.39V18c0 .27-.1.39-.31.39-.86 0-4.53-2.39-12.34-2.39-7.83 0-11.63 2.39-12.34 2.39" />
  </svg>
);
export default SvgPanoBold;
