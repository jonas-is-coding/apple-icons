import * as React from "react";
const SvgCreditcardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.88-14.95v-.48c0-1.3.73-2.02 2.03-2.02h9.7c1.32 0 2.04.72 2.04 2.02v.48Zm2.03 7.68c-1.3 0-2.03-.72-2.03-2.02v-4.24h13.77v4.24c0 1.3-.72 2.02-2.04 2.02Zm.45-1.91h1.4c.34 0 .58-.23.58-.55v-1.07c0-.33-.24-.54-.58-.54h-1.4c-.33 0-.57.21-.57.54v1.07c0 .32.24.55.57.55" />
  </svg>
);
export default SvgCreditcardcirclefillBold;
