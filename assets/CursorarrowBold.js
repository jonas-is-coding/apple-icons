import * as React from "react";
const SvgCursorarrowBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m12.587 22.557-3.57-8.28 4.32.26c1.14.08 1.69-1.17.88-1.98L2.177.377c-.75-.76-1.9-.31-1.92.77l-.26 17.01c-.02 1.18 1.3 1.68 2.08.8l2.72-3.06 3.41 8.45c.28.73.92.92 1.56.68l2.2-.86c.65-.25.91-.93.62-1.61" />
  </svg>
);
export default SvgCursorarrowBold;
