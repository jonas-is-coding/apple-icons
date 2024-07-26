import * as React from "react";
const SvgMessagecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m.01-7.45q-.405 0-.75-.03c-.12-.01-.22.02-.37.12-1.2.72-2.36 1.25-3.01 1.25-.55 0-.69-.43-.37-.83.25-.31.58-.72.79-1.15.08-.16.09-.28-.05-.38-1.53-.98-2.56-2.47-2.56-4.19 0-2.9 2.77-5.23 6.32-5.23 3.56 0 6.33 2.33 6.33 5.23 0 2.88-2.77 5.21-6.33 5.21" />
  </svg>
);
export default SvgMessagecirclefillBold;
