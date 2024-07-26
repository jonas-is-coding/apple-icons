import * as React from "react";
const SvgTengesigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.37-17.37c0-.22.17-.38.36-.38h8.01c.2 0 .35.16.35.38 0 .19-.15.36-.35.36h-8.01c-.19 0-.36-.17-.36-.36m4.38 10.65c-.65 0-1.1-.46-1.1-1.13v-6.44h-2.53c-.43 0-.72-.3-.72-.71 0-.43.29-.72.72-.72h7.26c.42 0 .71.29.71.72 0 .41-.29.71-.71.71h-2.54v6.44c0 .67-.43 1.13-1.09 1.13" />
  </svg>
);
export default SvgTengesigncirclefillBold;
