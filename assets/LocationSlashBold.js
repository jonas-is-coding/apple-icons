import * as React from "react";
const SvgLocationslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.51 20.485c.39.38 1.03.38 1.4 0 .37-.39.38-1.01 0-1.4L5.11.295c-.39-.39-1.03-.39-1.42 0-.36.37-.36 1.01 0 1.39Zm-3.08-7.94 4.03-8.79c1.15-2.49-.75-4.31-3.25-3.17l-8.75 4.02 2.25 2.24 6.2-2.83c.08-.03.15-.01.09.1l-2.82 6.18Zm-17.26.85 8.35.02c.11 0 .1-.03.1.08l.01 8.32c.01 2.49 3.2 2.98 4.25.66l2.39-5.22-2.24-2.25-1.44 3.14c-.03.06-.08.05-.08-.01l.04-4.6-3.07-3.07-4.62.02c-.06 0-.07-.03 0-.07l3.13-1.43-2.23-2.24-5.32 2.44c-2.27 1.03-1.72 4.2.73 4.21" />
  </svg>
);
export default SvgLocationslashBold;
