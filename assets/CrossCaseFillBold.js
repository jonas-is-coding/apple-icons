import * as React from "react";
const SvgCrosscasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.092 24.367h20.55c2.65 0 4.08-1.42 4.08-4.06v-11.6c0-2.64-1.43-4.05-4.08-4.05h-3.79v-1.33c0-2.24-1.27-3.33-3.63-3.33h-5.74c-2.28 0-3.59 1.09-3.59 3.33v1.33h-3.8c-2.66 0-4.09 1.41-4.09 4.05v11.6c0 2.64 1.43 4.06 4.09 4.06m6.46-20.8c0-.75.42-1.16 1.19-1.16h5.25c.76 0 1.18.41 1.18 1.16v1.09h-7.62Zm-1.91 11.77v-1.7c0-.79.53-1.33 1.33-1.33h2.2v-2.19c0-.81.54-1.35 1.34-1.35h1.7c.81 0 1.35.54 1.35 1.35v2.19h2.2c.8 0 1.35.54 1.35 1.33v1.7c0 .81-.55 1.35-1.35 1.35h-2.2v2.19c0 .82-.54 1.35-1.35 1.35h-1.7c-.8 0-1.34-.53-1.34-1.35v-2.19h-2.2c-.8 0-1.33-.54-1.33-1.35" />
  </svg>
);
export default SvgCrosscasefillBold;
