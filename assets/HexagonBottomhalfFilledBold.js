import * as React from "react";
const SvgHexagonbottomhalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.622 5.712a3.18 3.18 0 0 0-1.62 2.8v10.51c0 1.17.61 2.22 1.62 2.79l9.09 5.26c1.03.6 2.21.6 3.25 0l9.09-5.26a3.17 3.17 0 0 0 1.62-2.79V8.512c0-1.18-.61-2.23-1.62-2.8l-9.09-5.26c-1.04-.6-2.22-.6-3.25 0Zm1.33 8.05v-4.7c0-.45.24-.83.62-1.05l8.15-4.73c.38-.22.84-.22 1.23 0l8.14 4.73c.39.22.61.6.61 1.05v4.7Z" />
  </svg>
);
export default SvgHexagonbottomhalffilledBold;
