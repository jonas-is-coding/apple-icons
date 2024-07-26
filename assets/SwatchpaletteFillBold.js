import * as React from "react";
const SvgSwatchpalettefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 8.028h11.04v-4.7c0-2.13-1.22-3.33-3.39-3.33h-4.19c-2.22 0-3.46 1.2-3.46 3.33Zm12.81 1.73 5.53 3.2 2.31-4.01c1.07-1.87.56-3.76-1.35-4.86l-3.27-1.9c-1.23-.7-2.45-.74-3.4-.15.13.5.19 1.04.18 1.63Zm8.18 10.93 4.19-2.42c1.84-1.07 2.28-2.71 1.19-4.6l-2.1-3.64c-.4-.68-.89-1.23-1.6-1.57-.1.57-.28 1.01-.52 1.44l-3.69 6.39Zm-20.99-2.57h11.04v-8.18H.002Zm12.81 4.39 4.58-7.9-4.58-2.64Zm.55 2.59 5.99-3.45-2-3.46Zm-9.9 2.94h4.19c2.17 0 3.39-1.18 3.39-3.32v-4.7H.002v4.7c0 2.14 1.24 3.32 3.46 3.32" />
  </svg>
);
export default SvgSwatchpalettefillBold;
