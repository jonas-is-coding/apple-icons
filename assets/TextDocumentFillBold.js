import * as React from "react";
const SvgTextdocumentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.46 4.12-4.14v-10.23h-9.25c-1.42 0-2.12-.7-2.12-2.11V.002h-5.3c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14m7.92-16.26h8.64c-.05-.61-.53-1.19-1.21-1.88l-6.3-6.36c-.65-.66-1.24-1.13-1.85-1.19v8.71q0 .72.72.72m-6.14 7.21c-.55 0-.95-.41-.95-.93 0-.53.4-.93.95-.93h9.01c.54 0 .95.4.95.93 0 .52-.41.93-.95.93Zm0 4.33c-.55 0-.95-.41-.95-.93s.4-.93.95-.93h9.01c.54 0 .95.41.95.93s-.41.93-.95.93Z" />
  </svg>
);
export default SvgTextdocumentfillBold;
