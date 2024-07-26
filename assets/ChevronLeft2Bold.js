import * as React from "react";
const SvgChevronleft2Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.562 20.945c.36.35.79.52 1.3.52 1.03 0 1.88-.83 1.88-1.86 0-.52-.21-1-.6-1.38l-7.72-7.5 7.72-7.49c.39-.39.6-.87.6-1.37 0-1.03-.85-1.87-1.88-1.87-.51 0-.94.18-1.3.53l-8.87 8.67c-.47.46-.68.95-.69 1.54 0 .57.22 1.05.69 1.53Zm10.47 0c.37.35.79.52 1.3.52 1.04 0 1.88-.83 1.88-1.86 0-.52-.22-1-.61-1.38l-7.72-7.5 7.72-7.49c.4-.39.61-.87.61-1.37 0-1.03-.84-1.87-1.88-1.87-.52 0-.94.18-1.3.53l-8.86 8.67c-.47.46-.7.95-.71 1.54 0 .57.23 1.05.71 1.53Z" />
  </svg>
);
export default SvgChevronleft2Bold;
