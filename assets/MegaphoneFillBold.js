import * as React from "react";
const SvgMegaphonefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.922 23.732c1.57 0 2.75-1.19 2.75-2.77v-18.2c0-1.58-1.18-2.76-2.75-2.76-1.58 0-2.75 1.18-2.75 2.76v18.2c0 1.58 1.17 2.77 2.75 2.77m-15.73-5.95c3.45.41 7.65 1.5 11.23 3.26-.01-.17-.02-.35-.02-.51V3.272c0-.17.01-.32.01-.49-3.43 1.73-8.04 2.92-11.22 3.28Zm-3.97-.02h2.14v-11.7h-2.14c-3.37 0-5.22 1.8-5.22 5.06v1.59c0 3.25 1.85 5.05 5.22 5.05m4.95 8.3c1.63 0 2.86-1.29 2.38-3.2l-.68-2.8c-1.35-.29-3.07-.48-6.15-.52-.19-.01-.46-.02-.73-.02l2.18 4.37c.7 1.39 1.45 2.17 3 2.17" />
  </svg>
);
export default SvgMegaphonefillBold;
