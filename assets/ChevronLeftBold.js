import * as React from "react";
const SvgChevronleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 10.735c0 .57.21 1.05.69 1.52l8.86 8.69c.36.35.79.52 1.3.52 1.03 0 1.89-.83 1.89-1.86 0-.53-.22-1-.61-1.38l-7.72-7.5 7.72-7.49c.39-.38.61-.86.61-1.37 0-1.02-.86-1.87-1.89-1.87-.51 0-.94.18-1.3.53L.69 9.215c-.48.45-.68.93-.69 1.52" />
  </svg>
);
export default SvgChevronleftBold;
