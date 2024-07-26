import * as React from "react";
const SvgSpeakerslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.54 22.921c.39.38 1.02.38 1.39 0a.993.993 0 0 0 0-1.4L1.69.291a.996.996 0 0 0-1.41 0 1.01 1.01 0 0 0 0 1.39Zm-4.06-9.17.02-11.41c0-1.04-.79-1.88-1.84-1.88-.7 0-1.21.3-1.95.95l-4.52 4.04 1.88 1.87 3.19-2.89c.05-.05.11-.09.18-.09.09 0 .16.07.16.18v6.34Zm-12.15 2.83H8.6c.1 0 .15.02.21.08l4.92 4.38c.7.62 1.22.92 1.94.92.7 0 1.3-.38 1.59-.94l-2.87-2.87-4.32-3.96c-.25-.24-.45-.31-.8-.31H5.73c-.32 0-.48-.16-.48-.47v-4.4l-2.22-2.22c-.43.47-.66 1.21-.66 2.16v4.53c0 2.04 1.02 3.1 2.96 3.1" />
  </svg>
);
export default SvgSpeakerslashBold;
