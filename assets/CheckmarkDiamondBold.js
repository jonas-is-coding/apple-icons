import * as React from "react";
const SvgCheckmarkdiamondBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m2.38-1.91c-.68-.68-.72-1.34 0-2.05l8.95-8.94c.72-.72 1.37-.7 2.05-.02l8.96 8.97c.68.67.71 1.34 0 2.05l-8.96 8.94c-.7.72-1.37.69-2.05.01Zm8.76 4.56c.49 0 .91-.25 1.19-.67l5.04-7.77c.19-.28.3-.57.3-.86 0-.69-.61-1.17-1.26-1.17-.44 0-.8.24-1.09.71l-4.21 6.77-1.95-2.4c-.29-.37-.6-.52-1-.52-.68 0-1.23.54-1.23 1.22 0 .33.11.61.36.91l2.61 3.13c.35.42.74.65 1.24.65" />
  </svg>
);
export default SvgCheckmarkdiamondBold;
