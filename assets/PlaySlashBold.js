import * as React from "react";
const SvgPlayslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.094 20.466c.37.38 1.02.39 1.39 0 .38-.4.39-1 0-1.39L1.684.286c-.38-.38-1.02-.38-1.4 0s-.38 1.02 0 1.4Zm-.95-5.96 2.58-1.5c1.07-.63 1.6-1.21 1.6-2.11s-.53-1.49-1.6-2.11L6.544.526c-.49-.28-.98-.41-1.43-.41-.37 0-.72.08-1.01.27l5.26 5.27c.03-.02.11-.01.16.01l8.57 4.97c.11.07.16.17.16.26s-.05.19-.16.25l-2.09 1.23Zm-6.73.51-4.85 2.82c-.22.13-.45 0-.45-.26v-7.85l-3.03-3.01v12.7c0 1.5.92 2.26 2.03 2.26.45 0 .94-.14 1.43-.41l7.03-4.1Z" />
  </svg>
);
export default SvgPlayslashBold;
