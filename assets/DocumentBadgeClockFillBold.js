import * as React from "react";
const SvgDocumentbadgeclockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.178 13.702c4.35.02 7.92 3.6 7.92 7.93 0 1.52-.43 2.95-1.21 4.16h9.95c2.66 0 4.12-1.46 4.12-4.14v-10.23h-9.25c-1.42 0-2.12-.7-2.12-2.11V.002h-5.3c-2.66 0-4.11 1.46-4.11 4.14Zm12.03-4.17h8.64c-.05-.61-.53-1.19-1.21-1.88l-6.3-6.36c-.65-.66-1.24-1.13-1.85-1.19v8.71q0 .72.72.72m-12.03 18.28c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m-2.81-5.04c-.56 0-.98-.42-.98-.97 0-.54.44-.98.98-.98h1.92v-2.43c0-.56.43-.98.97-.98.55 0 .98.42.98.98v3.41c0 .55-.42.97-.98.97Z" />
  </svg>
);
export default SvgDocumentbadgeclockfillBold;
