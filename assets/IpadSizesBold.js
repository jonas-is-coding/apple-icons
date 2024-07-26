import * as React from "react";
const SvgIpadsizesBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h3.95c-.62-.68-1-1.59-1.07-2.67l-.01-.35h-2.42c-.88 0-1.33-.46-1.33-1.28V4.296c0-.82.45-1.27 1.33-1.27h16.65c-.21-1.88-1.55-3.03-3.58-3.03H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m4.3-3.22c0 1.98 1.27 3.22 3.28 3.22h10.96c2.03 0 3.29-1.24 3.29-3.22V7.966c0-1.99-1.26-3.23-3.29-3.23h-10.96c-2.01 0-3.28 1.24-3.28 3.23Zm2.81-.69V8.646c0-.68.44-1.09 1.13-1.09h9.66c.69 0 1.11.41 1.11 1.09v15.32c0 .68-.42 1.09-1.11 1.09h-9.66c-.69 0-1.13-.41-1.13-1.09" />
  </svg>
);
export default SvgIpadsizesBold;
