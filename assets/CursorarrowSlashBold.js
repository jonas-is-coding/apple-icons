import * as React from "react";
const SvgCursorarrowslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m16.393 14.427 2.03.11c1.14.08 1.69-1.17.88-1.98L7.272.377c-.76-.76-1.92-.31-1.93.77l-.02 2.23ZM.282 3.367l20.4 20.35c.39.38 1.02.38 1.4 0 .37-.39.38-1.01 0-1.4l-20.4-20.34a.984.984 0 0 0-1.4 0 .99.99 0 0 0 0 1.39m6.88 15.59 2.72-3.06 3.41 8.45c.28.73.93.91 1.56.68l2.2-.86c.41-.16.65-.5.7-.88l-.2-.46-8.17-8.16.02.01-4.2-4.18-.12 7.66c-.02 1.18 1.29 1.68 2.08.8" />
  </svg>
);
export default SvgCursorarrowslashBold;
