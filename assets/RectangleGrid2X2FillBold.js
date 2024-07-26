import * as React from "react";
const SvgRectanglegrid2X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.012 10.382h6.6c2.05 0 3.02-.96 3.02-3.03v-4.31c0-2.07-.97-3.04-3.02-3.04h-6.6c-2.04 0-3.01.97-3.01 3.04v4.31c0 2.07.97 3.03 3.01 3.03m14.27 0h6.6c2.04 0 3.01-.96 3.01-3.03v-4.31c0-2.07-.97-3.04-3.01-3.04h-6.6c-2.05 0-3.02.97-3.02 3.04v4.31c0 2.07.97 3.03 3.02 3.03m-14.27 12.02h6.6c2.05 0 3.02-.96 3.02-3.03v-4.3c0-2.08-.97-3.05-3.02-3.05h-6.6c-2.04 0-3.01.97-3.01 3.05v4.3c0 2.07.97 3.03 3.01 3.03m14.27 0h6.6c2.04 0 3.01-.96 3.01-3.03v-4.3c0-2.08-.97-3.05-3.01-3.05h-6.6c-2.05 0-3.02.97-3.02 3.05v4.3c0 2.07.97 3.03 3.02 3.03" />
  </svg>
);
export default SvgRectanglegrid2X2FillBold;
