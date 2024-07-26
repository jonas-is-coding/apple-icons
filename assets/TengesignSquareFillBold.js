import * as React from "react";
const SvgTengesignsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.77-16.2c0-.22.15-.38.37-.38h7.99c.2 0 .36.16.36.38 0 .19-.16.36-.36.36h-7.99a.36.36 0 0 1-.37-.36m4.37 10.65c-.65 0-1.1-.46-1.1-1.13v-6.44h-2.53c-.42 0-.73-.3-.73-.71 0-.43.31-.72.73-.72h7.25c.44 0 .73.29.73.72 0 .41-.29.71-.73.71h-2.51v6.44c0 .67-.45 1.13-1.11 1.13" />
  </svg>
);
export default SvgTengesignsquarefillBold;
