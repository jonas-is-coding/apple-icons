import * as React from "react";
const SvgDocumentcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.73-3.21h5.9c1.31 0 2.02-.73 2.02-2.04v-4.7h-4.61c-.72 0-1.07-.35-1.07-1.05v-4.67h-2.24c-1.31 0-2.01.73-2.01 2.04v8.38c0 1.33.7 2.04 2.01 2.04m3.6-7.73h4.27c-.03-.3-.26-.58-.6-.92l-3.13-3.16c-.32-.33-.61-.56-.9-.59v4.32c0 .23.13.35.36.35" />
  </svg>
);
export default SvgDocumentcircleBold;
