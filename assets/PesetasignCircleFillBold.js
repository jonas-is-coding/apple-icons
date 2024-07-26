import * as React from "react";
const SvgPesetasigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.41-6.86c-.68 0-1.1-.44-1.1-1.13v-5.68h-.71a.37.37 0 0 1-.37-.37c0-.19.16-.36.37-.36h.71v-2.2c0-.73.42-1.16 1.16-1.16h3.04c2.08 0 3.48 1.37 3.64 3.36h.65c.21 0 .38.17.38.36 0 .2-.17.37-.38.37h-.64c-.14 2.06-1.58 3.5-3.76 3.5h-1.89v2.18c0 .69-.42 1.13-1.1 1.13m1.1-7.54h3.41c-.14-1.1-.88-1.71-1.99-1.71h-1.42Zm0 2.61h1.39c1.2 0 1.91-.71 2.03-1.88h-3.42Z" />
  </svg>
);
export default SvgPesetasigncirclefillBold;
