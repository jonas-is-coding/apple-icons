import * as React from "react";
const SvgBubbleandpencilBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m28.262 3.347.8-.8c.55-.56.59-1.36.05-1.88l-.39-.38c-.47-.44-1.28-.36-1.82.17l-.77.76Zm-13.29 11.74 2.62-1.08 9.72-9.71-2.13-2.12-9.71 9.71-1.1 2.58c-.16.39.25.75.6.62m-6.83 14.45c.8 0 1.44-.34 2.42-1.19l3.96-3.47h6.74c3.58 0 5.74-2.19 5.74-5.74V7.427l-3.03 3.02v8.5c0 1.92-.96 2.9-2.89 2.9h-6.78c-.81 0-1.18.16-1.76.74l-3.67 3.6v-3.25c0-.79-.38-1.09-1.08-1.09h-1.86c-1.95 0-2.91-.98-2.91-2.9v-8.93c0-1.92.96-2.9 2.91-2.9h11.47l3.05-3.02H5.742c-3.59 0-5.74 2.18-5.74 5.74v9.3c0 3.55 2.3 5.74 5.54 5.74h.75v2.6c0 1.28.7 2.06 1.85 2.06" />
  </svg>
);
export default SvgBubbleandpencilBold;
