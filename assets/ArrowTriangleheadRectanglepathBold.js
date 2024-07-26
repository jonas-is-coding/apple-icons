import * as React from "react";
const SvgArrowtriangleheadrectanglepathBold = ({
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
    <path d="M.002 20.614c0 2.66 1.46 4.11 4.14 4.11h19.69c2.69 0 4.14-1.45 4.14-4.11V6.434c0-2.66-1.45-4.11-4.14-4.11h-6.76c-.83 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51h6.44c.93 0 1.44.47 1.44 1.47v13.44c0 .99-.51 1.45-1.44 1.45H4.462c-.93 0-1.44-.46-1.44-1.45V6.814c0-1 .51-1.47 1.44-1.47h3.13v1.41c0 .92.8 1.15 1.47.65l3.89-2.89c.49-.36.5-.99 0-1.36L9.072.264c-.68-.51-1.48-.27-1.48.66v1.4h-3.45c-2.68 0-4.14 1.45-4.14 4.11Z" />
  </svg>
);
export default SvgArrowtriangleheadrectanglepathBold;
