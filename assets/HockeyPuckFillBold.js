import * as React from "react";
const SvgHockeypuckfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.822 11.987c7.13 0 12.84-2.62 12.84-6.07 0-3.35-5.71-5.92-12.84-5.92-7.14 0-12.82 2.57-12.82 5.92 0 3.45 5.68 6.07 12.82 6.07m0 7.99c7.18 0 12.84-3.28 12.84-7.41v-2.77c-2.52 2.52-7.44 3.96-12.84 3.96-5.39 0-10.31-1.44-12.82-3.96v2.77c0 4.13 5.63 7.41 12.82 7.41" />
  </svg>
);
export default SvgHockeypuckfillBold;
