import * as React from "react";
const SvgDisplayBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.312 20.886h7.33v1.84h-.04c-.7 0-1.26.59-1.26 1.26s.56 1.27 1.26 1.27h8.14c.7 0 1.26-.6 1.26-1.27s-.56-1.26-1.26-1.26h-.04v-1.84h7.31c2.09 0 3.33-1.25 3.33-3.33V3.316c0-2.07-1.24-3.32-3.33-3.32h-22.7c-2.07 0-3.31 1.25-3.31 3.32v14.24c0 2.08 1.24 3.33 3.31 3.33m.33-2.9c-.47 0-.76-.28-.76-.75v-13.6c0-.47.29-.75.76-.75h22.06c.47 0 .75.28.75.75v13.6c0 .47-.28.75-.75.75Z" />
  </svg>
);
export default SvgDisplayBold;
