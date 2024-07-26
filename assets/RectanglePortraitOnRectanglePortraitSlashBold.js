import * as React from "react";
const SvgRectangleportraitonrectangleportraitslashBold = ({
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
    <path d="M5.989 3.2c.17-.12.38-.18.66-.18h10.11c1 0 1.45.5 1.45 1.44v1.69h-6.53c-.88 0-1.63.17-2.22.51l2.64 2.63c.13-.07.3-.11.51-.11h9.98c.99 0 1.45.5 1.45 1.45v10.62l3.03 3.01V10.29c0-2.67-1.45-4.14-4.11-4.14h-1.72V4.14c0-2.69-1.45-4.14-4.11-4.14H5.849c-.99 0-1.8.21-2.42.62Zm21.14 26.13c.39.39 1.02.39 1.4 0a1 1 0 0 0 0-1.39L1.679 1.1a.996.996 0 0 0-1.41 0c-.36.38-.36 1.02 0 1.4ZM1.739 6.19v13.85c0 2.67 1.45 4.14 4.11 4.14h1.71v2.08c0 2.67 1.47 4.14 4.12 4.14h11.28c.97 0 1.77-.2 2.38-.6l-2.57-2.59c-.14.11-.32.16-.57.16h-10.15c-1 0-1.46-.5-1.46-1.44v-10.9l-3.03-3.02v9.14h-1.35c-.99 0-1.45-.5-1.45-1.44V9.21Z" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitslashBold;
