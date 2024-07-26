import * as React from "react";
const SvgCirclelefthalffilledrighthalfstripedhorizontalBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-21.66c1.33 0 2.59.27 3.73.77h-3.73zm0 3.31v-.89h6.28c.3.28.59.58.85.89Zm0 2.55v-.9h8.24c.15.3.28.59.4.9Zm0 2.54v-.88h9.13c.06.28.1.57.13.88Zm0 2.53v-.88h9.27c-.02.29-.07.6-.11.88Zm0 2.54v-.88h8.7c-.12.31-.25.6-.39.88Zm0 2.55v-.88h7.23c-.25.31-.52.61-.82.88Zm0 2.56v-.77h3.73c-1.14.49-2.4.77-3.73.77" />
  </svg>
);
export default SvgCirclelefthalffilledrighthalfstripedhorizontalBold;
