import * as React from "react";
const SvgShiftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.28 22.724h7.67c1.86 0 2.91-1.1 2.91-2.92v-4.87h4.36c1.18 0 2.01-.7 2.01-1.77 0-.67-.28-1.11-.91-1.73L14.79.784c-.52-.5-1.08-.78-1.68-.78-.59 0-1.16.28-1.67.78L.9 11.434c-.63.65-.9 1.06-.9 1.73 0 1.07.83 1.77 2 1.77h4.38v4.87c0 1.82 1.04 2.92 2.9 2.92" />
  </svg>
);
export default SvgShiftfillBold;
