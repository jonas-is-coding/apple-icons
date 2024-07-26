import * as React from "react";
const SvgClockcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-5.94c-3.51 0-6.42-2.9-6.42-6.43 0-3.52 2.9-6.42 6.42-6.42 3.53 0 6.42 2.9 6.42 6.42 0 3.53-2.89 6.43-6.42 6.43m-2.89-5.4h2.89c.39 0 .71-.29.71-.69v-3.79c0-.39-.32-.7-.71-.7-.4 0-.7.31-.7.7v3.1h-2.19c-.4 0-.69.29-.69.69s.29.69.69.69" />
  </svg>
);
export default SvgClockcirclefillBold;
