import * as React from "react";
const SvgChevronleftchevronrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.562 20.945c.35.35.79.52 1.3.52 1.03 0 1.88-.83 1.88-1.86 0-.52-.21-1-.6-1.38l-7.72-7.5 7.72-7.49c.39-.39.6-.87.6-1.37 0-1.03-.85-1.87-1.88-1.87-.51 0-.94.18-1.3.53l-8.87 8.67c-.47.46-.68.95-.69 1.54 0 .57.21 1.07.69 1.53Zm11.61 0 8.88-8.68c.48-.48.69-.96.69-1.53 0-.59-.23-1.08-.69-1.54l-8.88-8.67c-.35-.35-.77-.53-1.28-.53-1.05 0-1.89.84-1.89 1.87 0 .5.21.98.6 1.37l7.72 7.49-7.72 7.5c-.39.38-.6.86-.6 1.38 0 1.03.84 1.86 1.89 1.86.5 0 .92-.17 1.28-.52" />
  </svg>
);
export default SvgChevronleftchevronrightBold;
