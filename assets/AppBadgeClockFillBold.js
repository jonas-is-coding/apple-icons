import * as React from "react";
const SvgAppbadgeclockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.752 22.286h8.75a7.73 7.73 0 0 1-1.15-4.09c0-4.34 3.59-7.92 7.94-7.92v-3.53c0-2.36-.3-4-1.53-5.21-1.21-1.22-2.87-1.54-5.22-1.54h-8.8c-2.35 0-4 .32-5.22 1.54s-1.52 2.85-1.52 5.2v8.8c0 2.38.29 4.01 1.52 5.22 1.22 1.22 2.87 1.53 5.23 1.53m15.55 2.1c3.35 0 6.16-2.81 6.16-6.17 0-3.38-2.79-6.17-6.16-6.17-3.39 0-6.18 2.79-6.18 6.17 0 3.37 2.79 6.17 6.18 6.17m-2.81-5.04c-.55 0-.99-.43-.99-.97 0-.55.45-.97.99-.97h1.92v-2.45c0-.54.42-.96.97-.96s.99.42.99.96v3.42c0 .55-.44.97-.99.97Z" />
  </svg>
);
export default SvgAppbadgeclockfillBold;
