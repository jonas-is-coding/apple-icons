import * as React from "react";
const SvgInsetfilledtrailinghalfarrowtrailingrectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm10.25-1.9h7.6c.53 0 .74-.22.74-.76V5.682c0-.54-.21-.76-.74-.76h-7.6c-.53 0-.74.22-.74.76v11.04c0 .54.21.76.74.76m-9.75-6.28c.01.53.39.93.9.93h2.51l1.2-.06-.5.48-1.08.98a.85.85 0 0 0 .57 1.47c.24 0 .44-.11.6-.28l2.7-2.85c.22-.24.3-.43.3-.67 0-.25-.08-.44-.3-.68l-2.7-2.85a.8.8 0 0 0-.6-.28c-.48 0-.84.37-.84.87 0 .21.09.46.27.6l1.08.98.51.49-1.21-.06h-2.51c-.51 0-.92.4-.9.93" />
  </svg>
);
export default SvgInsetfilledtrailinghalfarrowtrailingrectangleBold;
