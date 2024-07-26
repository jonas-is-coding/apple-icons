import * as React from "react";
const SvgExclamationmarkmagnifyingglassBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.005 9.884c0 5.44 4.41 9.86 9.86 9.86 1.82 0 3.49-.5 4.92-1.37l4.72 4.71c.45.46 1.06.68 1.69.68 1.36 0 2.37-1.03 2.37-2.37 0-.63-.22-1.21-.68-1.68l-4.66-4.68a9.4 9.4 0 0 0 1.52-5.15 9.87 9.87 0 0 0-9.88-9.88c-5.45 0-9.86 4.41-9.86 9.88m3.19 0c0-3.68 3-6.67 6.67-6.67 3.68 0 6.67 2.99 6.67 6.67 0 3.66-2.99 6.66-6.67 6.66-3.67 0-6.67-3-6.67-6.66m6.68 1.41c.67 0 1.07-.37 1.11-1.08l.15-3.91c.02-.73-.51-1.23-1.26-1.23-.76 0-1.28.5-1.25 1.23l.15 3.93c.03.68.44 1.06 1.1 1.06m0 3.3c.77 0 1.36-.48 1.36-1.22 0-.73-.58-1.22-1.36-1.22-.75 0-1.34.49-1.34 1.22 0 .74.59 1.22 1.34 1.22" />
  </svg>
);
export default SvgExclamationmarkmagnifyingglassBold;
