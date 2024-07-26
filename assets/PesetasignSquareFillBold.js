import * as React from "react";
const SvgPesetasignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m4.73-5.69c-.69 0-1.1-.44-1.1-1.13v-5.68h-.72a.37.37 0 0 1-.37-.37c0-.19.16-.36.37-.36h.72v-2.2c0-.73.42-1.16 1.15-1.16h3.04c2.09 0 3.48 1.37 3.64 3.36h.65c.21 0 .38.17.38.36 0 .2-.17.37-.38.37h-.64c-.14 2.06-1.57 3.5-3.76 3.5h-1.89v2.18c0 .69-.42 1.13-1.09 1.13m1.09-7.54h3.41c-.14-1.1-.87-1.71-1.99-1.71h-1.42Zm0 2.61h1.39c1.2 0 1.93-.71 2.03-1.88h-3.42Z" />
  </svg>
);
export default SvgPesetasignsquarefillBold;
