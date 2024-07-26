import * as React from "react";
const SvgPedalbrakefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.162 21.807h14.14c4.13 0 5.86-2.06 6.4-6.61.32-2.65.32-5.32-.1-8.88-.54-4.85-3.12-6.79-8.27-6.22l-11.7 1.32c-3 .34-4.63 2.12-4.63 5.03v11.21c0 2.64 1.52 4.15 4.16 4.15m1.97-13.45c-.57 0-1-.45-1-.99 0-.57.43-1 1-1h12.57c.56 0 1 .43 1 1 0 .54-.44.99-1 .99Zm0 4.17c-.57 0-1-.44-1-1 0-.55.43-.99 1-.99h12.57c.56 0 1 .44 1 .99 0 .56-.44 1-1 1Zm0 4.17c-.57 0-1-.44-1-1.01 0-.55.43-.99 1-.99h12.57c.56 0 1 .44 1 .99 0 .57-.44 1.01-1 1.01Z" />
  </svg>
);
export default SvgPedalbrakefillBold;
