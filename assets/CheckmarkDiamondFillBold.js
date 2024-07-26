import * as React from "react";
const SvgCheckmarkdiamondfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m11.07 2.95c-.52 0-.93-.23-1.31-.69l-2.75-3.28c-.27-.33-.38-.62-.38-.96 0-.73.59-1.3 1.3-1.3.43 0 .75.16 1.07.54l2.04 2.52 4.57-7.27c.3-.49.69-.74 1.15-.74.7 0 1.35.52 1.35 1.24 0 .3-.12.61-.33.92l-5.44 8.32c-.3.44-.76.7-1.27.7" />
  </svg>
);
export default SvgCheckmarkdiamondfillBold;
