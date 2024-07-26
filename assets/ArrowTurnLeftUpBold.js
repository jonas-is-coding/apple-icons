import * as React from "react";
const SvgArrowturnleftupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.502 22.458c.68 0 1.31-.03 1.97-.13.74-.13 1.63-.6 1.63-1.7 0-1-.68-1.61-1.68-1.61-.49 0-1.09.06-1.88.06-3.11 0-4.44-1.12-4.44-4.27l.01-6.71-.12-2.85 1.72 1.94 3.27 3.3c.32.32.72.53 1.22.53.92 0 1.61-.68 1.61-1.68 0-.41-.18-.82-.53-1.18l-7.62-7.63c-.31-.33-.79-.53-1.25-.53s-.94.2-1.26.53l-7.62 7.63c-.36.36-.53.77-.53 1.18 0 1 .69 1.68 1.6 1.68.52 0 .92-.21 1.22-.53l3.3-3.3 1.69-1.93-.1 2.84v6.97c0 5.14 2.68 7.39 7.79 7.39" />
  </svg>
);
export default SvgArrowturnleftupBold;
