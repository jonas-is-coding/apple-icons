import * as React from "react";
const SvgGreaterthanorequaltocirclefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.83-10.18c-.72 0-1.18-.66-1.18-1.19 0-.46.26-.87.72-1.07l4.27-1.86v-.04l-4.27-1.87c-.46-.22-.72-.63-.72-1.06 0-.56.46-1.19 1.18-1.19.17 0 .35.03.62.15l5.94 2.69c.63.3.9.74.9 1.32s-.27.97-.9 1.26l-5.94 2.7c-.27.11-.45.16-.62.16m7.54 2.7c0 .63-.52 1.14-1.23 1.14h-6.71c-.7 0-1.23-.51-1.23-1.14 0-.67.53-1.19 1.23-1.19h6.71c.71 0 1.23.52 1.23 1.19" />
  </svg>
);
export default SvgGreaterthanorequaltocirclefillBold;
