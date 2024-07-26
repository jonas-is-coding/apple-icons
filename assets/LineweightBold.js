import * as React from "react";
const SvgLineweightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.942 2.758h18.49c.57 0 .94-.38.94-.94v-.88c0-.58-.37-.94-.94-.94H.942c-.57 0-.94.36-.94.94v.88c0 .56.37.94.94.94m.29 7.24h17.91c.75 0 1.23-.48 1.23-1.26v-1.67c0-.78-.48-1.26-1.23-1.26H1.232c-.75 0-1.23.48-1.23 1.26v1.67c0 .78.48 1.26 1.23 1.26m0 9.9h17.91c.75 0 1.23-.49 1.23-1.25v-4.38c0-.77-.48-1.25-1.23-1.25H1.232c-.75 0-1.23.48-1.23 1.25v4.38c0 .76.48 1.25 1.23 1.25" />
  </svg>
);
export default SvgLineweightBold;
