import * as React from "react";
const SvgMinusplusbatteryblockslashfillBold = ({
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
    <path d="M25.122 25.347c.39.38 1.02.38 1.4 0 .37-.39.38-1.01 0-1.4L2.852.287c-.39-.38-1.02-.38-1.41 0-.38.38-.38 1.02 0 1.4Zm2.35-3.18c.33-.6.5-1.36.5-2.27V8.917c0-2.66-1.45-4.11-4.14-4.11h-1.28v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.96c-1.19 0-1.87.7-1.87 1.88v1.32h-3.73v-1.32c0-1.18-.68-1.88-1.87-1.88h-2.74c-.2 0-.39.02-.55.08l11.43 11.41v-1.21c0-.6.49-1.08 1.08-1.08.6 0 1.09.48 1.09 1.08v1.43h1.42c.6 0 1.08.49 1.08 1.08 0 .61-.48 1.09-1.08 1.09h-1.2Zm-23.33 1.84h16.93l-8.7-8.68c-.15.1-.35.16-.55.16h-5.46c-.61 0-1.09-.48-1.09-1.09 0-.59.48-1.08 1.09-1.08h4.01l-8.18-8.16c-1.44.57-2.19 1.84-2.19 3.76v10.98c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgMinusplusbatteryblockslashfillBold;
