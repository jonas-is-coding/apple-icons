import * as React from "react";
const SvgArrowtriangleheadturnuprightcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.06-6.09c0 .82.48 1.38 1.27 1.38.78-.01 1.26-.56 1.26-1.38v-2.45c0-.74.38-1.09 1.04-1.09h2.54v1.77c0 .84.91 1.21 1.6.58l3.04-2.69c.65-.59.65-1.28 0-1.85l-3.04-2.7c-.69-.62-1.6-.26-1.6.59v1.77h-3.1c-1.99 0-3.01 1.02-3.01 2.96Z" />
  </svg>
);
export default SvgArrowtriangleheadturnuprightcircleBold;
