import * as React from "react";
const SvgRtbuttonroundedtophorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm.1 3.02h7.69c4.93 0 7.03 2.1 7.03 6.87v7.12c0 .93-.5 1.42-1.4 1.42H4.432c-.9 0-1.41-.49-1.41-1.42v-7.12c0-4.77 2.1-6.87 7.03-6.87m7.33 12.4c.54 0 .98-.45.98-1v-6.62h1.08a.809.809 0 1 0 0-1.62h-4.17a.811.811 0 0 0 0 1.62h1.1v6.62c0 .55.44 1 1.01 1m-8.5.01c.63 0 1-.4 1-1.04v-2.44h.75l.96 2.64c.19.56.5.84 1.03.84.5 0 .94-.35.93-.98 0-.18-.06-.38-.16-.61l-.9-2.31c.81-.49 1.15-1.48 1.15-2.44 0-1.92-1.11-2.91-2.94-2.91h-1.82c-.66 0-.99.4-.99 1.05v7.16c0 .64.33 1.04.99 1.04m1-4.88v-2.83h.64c.73 0 1.09.67 1.09 1.42s-.31 1.41-1.09 1.41Z" />
  </svg>
);
export default SvgRtbuttonroundedtophorizontalBold;
