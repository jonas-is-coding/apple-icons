import * as React from "react";
const SvgCirclebadge2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.972 17.958c1.28 0 2.5-.27 3.6-.77 1.08.5 2.28.77 3.54.77 4.95 0 8.98-4.04 8.98-8.98 0-4.96-4.03-8.98-8.98-8.98-1.26 0-2.46.27-3.54.75a9 9 0 0 0-3.6-.75c-4.95 0-8.97 4.02-8.97 8.98 0 4.94 4.02 8.98 8.97 8.98m8.98-8.98c0-2.3-.87-4.4-2.28-5.98.14-.01.29-.02.44-.02a5.99 5.99 0 0 1 5.99 6c0 3.3-2.68 5.99-5.99 5.99-.15 0-.3 0-.44-.01 1.41-1.6 2.28-3.68 2.28-5.98m-8.98 5.99c-3.31 0-6-2.69-6-5.99 0-3.32 2.69-6 6-6a5.99 5.99 0 0 1 5.99 6c0 3.3-2.68 5.99-5.99 5.99" />
  </svg>
);
export default SvgCirclebadge2Bold;
