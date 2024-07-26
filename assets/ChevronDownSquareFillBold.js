import * as React from "react";
const SvgChevrondownsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m8.62-7.36c-.84.91-2.1.89-2.94-.01l-4.54-4.84c-.48-.51-.48-1.29-.03-1.73.51-.51 1.3-.52 1.78-.01l4.25 4.55 4.27-4.55c.47-.51 1.25-.5 1.78.01.45.43.45 1.23-.05 1.73Z" />
  </svg>
);
export default SvgChevrondownsquarefillBold;
