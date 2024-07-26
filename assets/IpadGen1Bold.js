import * as React from "react";
const SvgIpadgen1Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m6.67-24.5c-.43 0-.77-.34-.77-.77a.764.764 0 1 1 1.53 0c0 .43-.34.77-.76.77m-7.55 19.6V4.896h15.08v18.08Zm7.56 3.51c-.68 0-1.23-.54-1.23-1.22 0-.67.55-1.21 1.23-1.21.66 0 1.2.54 1.2 1.21 0 .68-.54 1.22-1.2 1.22" />
  </svg>
);
export default SvgIpadgen1Bold;
