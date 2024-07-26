import * as React from "react";
const SvgRectanglestackfillbadgeminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.006 1.748h14.94c-.09-1.13-.8-1.75-1.99-1.75h-10.96c-1.19 0-1.9.62-1.99 1.75m-2.35 3.62h19.63c-.15-1.2-.81-1.9-2.18-1.9h-15.28c-1.37 0-2.01.7-2.17 1.9m3.97 21.71h14.15c2.59 0 4-1.4 4-3.97v-11.83c0-2.56-1.41-3.97-4-3.97h-16.62c-2.59 0-3.99 1.41-3.99 3.97v3.31c4.35 0 7.93 3.6 7.93 7.94 0 1.68-.55 3.25-1.47 4.55m-6.45 1.62c3.35 0 6.16-2.8 6.16-6.17 0-3.38-2.78-6.17-6.16-6.17-3.39 0-6.18 2.79-6.18 6.17s2.79 6.17 6.18 6.17m-3.05-5.23c-.5 0-.93-.43-.93-.93-.02-.51.43-.95.93-.95h6.1c.5 0 .92.43.92.95 0 .5-.42.93-.92.93Z" />
  </svg>
);
export default SvgRectanglestackfillbadgeminusBold;
