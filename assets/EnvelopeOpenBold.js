import * as React from "react";
const SvgEnvelopeopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 27.566h21.33c2.49 0 3.95-1.45 3.95-4.11v-11.56c0-2.01-.68-3.3-2.2-4.31l-9.68-6.55c-2.06-1.38-3.62-1.38-5.68 0l-9.66 6.55c-1.52 1.01-2.2 2.3-2.2 4.31v11.56c0 2.66 1.46 4.11 4.14 4.11m10.57-13.5c-.9 0-1.65.31-2.44 1.03l-1.47 1.32-6.76-6.77 9.45-6.36c.88-.58 1.54-.58 2.42 0l9.47 6.36-6.76 6.78-1.48-1.33c-.79-.72-1.53-1.03-2.43-1.03m11.91 9.24c0 .1 0 .21-.01.3l-6.17-5.55 6.18-6.19Zm-23.83 0v-11.44l6.2 6.19-6.18 5.55c-.01-.09-.02-.2-.02-.3m10.98-6.3c.3-.27.61-.41.94-.41.32 0 .63.14.93.41l8.62 7.76H5.172Z" />
  </svg>
);
export default SvgEnvelopeopenBold;
