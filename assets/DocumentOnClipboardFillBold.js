import * as React from "react";
const SvgDocumentonclipboardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.002 4.39h1.97c2.13 0 3.5.52 4.79 1.81l6.64 6.64c1.22 1.21 1.61 2.79 1.61 4.77v6.48h.23c2 0 3.86-1.24 3.86-4.13V4.14c0-2.68-1.44-4.14-4.1-4.14h-10.94c-2.59 0-4.06 1.49-4.06 4.08Zm6.06-.71v-.29c0-.36.28-.84.86-.84h5.25c.6 0 .87.48.87.84v.29c0 .43-.34.83-.87.83h-5.25c-.52 0-.86-.4-.86-.83M.002 26.25c0 2.68 1.45 4.14 4.11 4.14h10.89c2.66 0 4.11-1.47 4.11-4.14v-8.81h-8.61c-1.48 0-2.25-.78-2.25-2.25V6.3h-4.14c-2.66 0-4.11 1.47-4.11 4.14Zm10.84-10.71 8.04-.01c-.14-.57-.51-1.13-1.07-1.69l-6.01-6.08c-.58-.58-1.07-.98-1.64-1.15v8.21c0 .46.24.72.68.72" />
  </svg>
);
export default SvgDocumentonclipboardfillBold;
