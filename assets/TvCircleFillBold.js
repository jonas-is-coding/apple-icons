import * as React from "react";
const SvgTvcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.24-8.2c-1.02 0-1.71-.68-1.71-1.69v-6.28c0-1.01.69-1.7 1.71-1.7h10.47c1.02 0 1.72.69 1.72 1.7v6.28c0 1.01-.7 1.69-1.72 1.69Zm.48-1.69h9.52c.26 0 .43-.18.43-.44v-5.39c0-.27-.17-.45-.43-.45h-9.52c-.26 0-.44.18-.44.45v5.39c0 .26.18.44.44.44m1.55 4.41c-.49 0-.84-.35-.84-.83 0-.49.35-.85.84-.85h6.45c.48 0 .83.36.83.85 0 .48-.35.83-.83.83Z" />
  </svg>
);
export default SvgTvcirclefillBold;
