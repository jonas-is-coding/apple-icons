import * as React from "react";
const SvgInsetfilledtopleadingbottomleadingtrailinghalfrectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm17.85-1.9c.53 0 .74-.22.74-.76V5.682c0-.54-.21-.76-.74-.76h-6.7c-.53 0-.74.22-.74.76v11.04c0 .54.21.76.74.76Zm-9.95-7.17c.53 0 .74-.22.74-.75v-3.88c0-.54-.21-.76-.74-.76h-6.7c-.53 0-.74.22-.74.76v3.88c0 .53.21.75.74.75Zm0 7.17c.53 0 .74-.22.74-.76v-3.88c0-.53-.21-.75-.74-.75h-6.7c-.53 0-.74.22-.74.75v3.88c0 .54.21.76.74.76Z" />
  </svg>
);
export default SvgInsetfilledtopleadingbottomleadingtrailinghalfrectangleBold;
