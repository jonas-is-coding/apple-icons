import * as React from "react";
const SvgDocumentondocumentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.012 24.09h.23c2 0 3.86-1.24 3.86-4.13V9.01h-6.71c-1.14 0-1.94-.81-1.94-1.93V0h-6.39c-2.56 0-4.06 1.49-4.06 4.03v.36h1.97c2.13 0 3.5.52 4.79 1.81l6.64 6.64c1.22 1.21 1.61 2.79 1.61 4.77Zm-2.16-16.85h5.99c-.03-.43-.38-.84-.9-1.36l-4.38-4.56c-.47-.48-.89-.82-1.35-.86l.01 6.15c0 .44.19.63.63.63M4.112 30.39h10.89c2.66 0 4.11-1.47 4.11-4.14v-8.81h-8.61c-1.48 0-2.25-.78-2.25-2.25V6.3h-4.14c-2.66 0-4.11 1.47-4.11 4.14v15.81c0 2.68 1.45 4.14 4.11 4.14m6.73-14.85 8.04-.01c-.14-.57-.51-1.13-1.07-1.69l-6.01-6.08c-.58-.58-1.07-.98-1.64-1.15v8.21c0 .46.24.72.68.72" />
  </svg>
);
export default SvgDocumentondocumentfillBold;
