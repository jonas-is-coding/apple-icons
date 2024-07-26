import * as React from "react";
const SvgBagfillbadgeminusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.876 4.566h-1.55c-.27-2.66-2.39-4.57-5.24-4.57-2.84 0-4.97 1.91-5.24 4.57h-1.54c-2.68 0-4.14 1.46-4.14 4.12v4.12c4.35 0 7.93 3.59 7.93 7.92 0 1.53-.44 2.96-1.21 4.16h11.18c2.49 0 3.94-1.45 3.94-4.11V8.686c0-2.65-1.46-4.12-4.13-4.12m-6.79-2.06c1.25 0 2.18.83 2.4 2.06h-4.79c.22-1.23 1.14-2.06 2.39-2.06m-10.91 24.39c3.35 0 6.16-2.8 6.16-6.18 0-3.37-2.78-6.16-6.16-6.16-3.39 0-6.18 2.79-6.18 6.16 0 3.39 2.79 6.18 6.18 6.18m-3.05-5.23a.95.95 0 0 1-.93-.94c-.02-.5.43-.95.93-.95h6.1c.5 0 .92.44.92.95s-.42.94-.92.94Z" />
  </svg>
);
export default SvgBagfillbadgeminusBold;
