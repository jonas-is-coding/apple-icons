import * as React from "react";
const SvgMapcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.6-8.21v-9.97c.18.03.4.16.64.29l2.5 1.48v9.85c-.21-.03-.38-.09-.58-.21Zm-4.63.61v-7.81c0-.5.2-.86.64-1.12l2.48-1.38c.23-.12.42-.2.58-.25v10.16l-2.17 1.17c-.2.11-.39.18-.62.18-.5 0-.91-.31-.91-.95m8.69 1.01V8.006l2.07-1.14c.22-.13.46-.2.69-.2.58 0 1.01.29 1.01.95v7.71c0 .51-.2.87-.68 1.14l-2.84 1.59c-.08.05-.18.08-.25.1" />
  </svg>
);
export default SvgMapcirclefillBold;
