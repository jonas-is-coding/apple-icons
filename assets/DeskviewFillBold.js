import * as React from "react";
const SvgDeskviewfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.472 14.083h8.43c1.91 0 3.01-1.06 3.01-3.06v-7.92c0-1.97-1.1-3.1-3.01-3.1h-8.56c-1.9 0-2.88 1.09-2.88 3.1v7.88c0 1.99 1.11 3.1 3.01 3.1m-.53 6.73h9.48c.8 0 1.3-.53 1.3-1.25 0-.44-.22-.87-.58-1.29l-2.25-2.62h-6.42l-2.21 2.62c-.36.43-.61.85-.61 1.29 0 .72.5 1.25 1.29 1.25m-6.42 8.85h22.33c.84 0 1.52-.68 1.52-1.54 0-.84-.68-1.52-1.52-1.52H1.522c-.85 0-1.52.68-1.52 1.52 0 .86.67 1.54 1.52 1.54" />
  </svg>
);
export default SvgDeskviewfillBold;
