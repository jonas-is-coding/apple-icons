import * as React from "react";
const SvgCubeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.622 21.812 9.09 5.26c1.03.6 2.21.6 3.25 0l9.09-5.26a3.18 3.18 0 0 0 1.62-2.8V8.502c0-1.17-.61-2.22-1.62-2.79l-9.09-5.26c-1.04-.6-2.22-.6-3.25 0l-9.09 5.26a3.17 3.17 0 0 0-1.62 2.79v10.51c0 1.18.61 2.23 1.62 2.8m10.67-9.45-8.14-4.67c.06-.06.08-.07.17-.13l7.4-4.28c.38-.22.84-.22 1.23 0l7.39 4.28c.08.06.1.07.14.11Zm1.51 11.37v-8.81l7.9-4.52v8.06c0 .44-.22.83-.61 1.05l-6.92 4.01c-.14.08-.21.13-.37.21m-2.95 0c-.09-.06-.12-.07-.22-.13l-7.06-4.09c-.38-.22-.62-.61-.62-1.05v-8.03l7.9 4.52Z" />
  </svg>
);
export default SvgCubeBold;
