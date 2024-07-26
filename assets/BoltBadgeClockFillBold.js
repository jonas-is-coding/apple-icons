import * as React from "react";
const SvgBoltbadgeclockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.001 15.366c0 .54.41.94.98.94h7.09l-3.7 9.79c-.54 1.41.91 2.15 1.85 1.01l2.94-3.59c-.11-.53-.17-1.08-.17-1.65 0-4.39 3.71-8.02 8.05-7.91l.65-.8c.23-.29.34-.56.34-.86 0-.54-.42-.94-.98-.94h-7.09l3.7-9.79c.53-1.4-.92-2.15-1.86-1.01L.341 14.506c-.24.29-.34.56-.34.86m16.92 12.68c3.35 0 6.16-2.81 6.16-6.18s-2.78-6.16-6.16-6.16c-3.39 0-6.17 2.79-6.17 6.16 0 3.38 2.78 6.18 6.17 6.18m-2.81-5.04c-.55 0-.99-.43-.99-.97 0-.55.45-.99.99-.99h1.92v-2.43c0-.54.42-.96.97-.96s.99.42.99.96v3.42c0 .55-.44.97-.99.97Z" />
  </svg>
);
export default SvgBoltbadgeclockfillBold;
