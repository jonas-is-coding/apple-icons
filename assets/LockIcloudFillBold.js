import * as React from "react";
const SvgLockicloudfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.822 21.551c3.83 0 6.88-2.84 6.88-6.38 0-2.54-1.42-4.87-3.8-5.85-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-3.11-.71-6.21 1.54-6.41 4.88-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88Zm-11.13-4.31c-.81 0-1.18-.4-1.18-1.27v-4.05c0-.73.28-1.13.86-1.21v-1.15c0-2.01 1.21-3.34 2.98-3.34 1.78 0 2.99 1.33 2.99 3.34v1.14c.58.08.86.49.86 1.22v4.05c0 .87-.37 1.27-1.16 1.27Zm1.21-6.58h2.91v-1.2c0-1.07-.57-1.75-1.46-1.75-.88 0-1.45.68-1.45 1.75Z" />
  </svg>
);
export default SvgLockicloudfillBold;
