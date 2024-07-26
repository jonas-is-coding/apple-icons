import * as React from "react";
const SvgArrowupdocumentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.46 4.12-4.14v-10.23h-9.25c-1.42 0-2.12-.7-2.12-2.11V.002h-5.3c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14m7.92-16.26h8.64c-.05-.61-.53-1.19-1.21-1.88l-6.3-6.36c-.65-.66-1.24-1.13-1.85-1.19v8.71q0 .72.72.72m-1.64 13.26c-.65 0-1.19-.46-1.19-1.1v-3.42l.11-1.6-.71.75-.86.88c-.19.2-.48.38-.76.38-.59 0-1.04-.44-1.04-1 0-.33.12-.56.37-.78l3.13-2.89c.31-.25.58-.41.95-.41s.64.16.94.41l3.14 2.89c.25.22.36.45.36.78 0 .56-.45 1-1.04 1-.28 0-.57-.18-.76-.38l-.86-.88-.71-.75.12 1.6v3.42c0 .64-.54 1.1-1.19 1.1" />
  </svg>
);
export default SvgArrowupdocumentfillBold;
