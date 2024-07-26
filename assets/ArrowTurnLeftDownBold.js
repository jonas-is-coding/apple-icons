import * as React from "react";
const SvgArrowturnleftdownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.502-.002c-5.11 0-7.79 2.26-7.79 7.39v6.98l.1 2.84-1.69-1.94-3.3-3.29c-.3-.32-.7-.54-1.22-.54-.91 0-1.6.68-1.6 1.68 0 .41.17.83.53 1.18l7.62 7.64c.32.32.8.52 1.26.52s.94-.2 1.25-.52l7.62-7.64c.35-.35.53-.77.53-1.18 0-1-.69-1.68-1.61-1.68-.5 0-.9.22-1.22.54l-3.27 3.29-1.72 1.94.12-2.84-.01-6.72c0-3.14 1.33-4.26 4.44-4.26.79 0 1.39.06 1.88.06 1 0 1.68-.62 1.68-1.61 0-1.1-.89-1.59-1.63-1.71-.66-.09-1.29-.13-1.97-.13" />
  </svg>
);
export default SvgArrowturnleftdownBold;
