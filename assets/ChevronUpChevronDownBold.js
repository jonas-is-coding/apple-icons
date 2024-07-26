import * as React from "react";
const SvgChevronupchevrondownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.832.003c-.57 0-1.06.23-1.53.7l-6.62 6.35c-.4.39-.68.86-.68 1.38 0 1.11.91 1.88 1.86 1.88.47 0 .97-.14 1.37-.54l5.6-5.48 5.61 5.48c.41.39.9.54 1.37.54.96 0 1.86-.77 1.86-1.88 0-.52-.27-.99-.67-1.38l-6.62-6.35c-.48-.47-.96-.7-1.55-.7m0 25.12c.59 0 1.07-.23 1.55-.7l6.62-6.35c.4-.39.67-.86.67-1.39 0-1.1-.9-1.87-1.86-1.87-.47 0-.96.15-1.37.54l-5.61 5.48-5.6-5.48c-.4-.4-.9-.54-1.37-.54-.95 0-1.86.77-1.86 1.87 0 .53.28 1 .68 1.39l6.62 6.35c.47.47.96.7 1.53.7" />
  </svg>
);
export default SvgChevronupchevrondownBold;
