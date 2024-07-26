import * as React from "react";
const SvgLine2HorizontaldecreasecirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6-12.93c-.72 0-1.24-.47-1.24-1.15 0-.71.52-1.16 1.24-1.16h12.03c.73 0 1.24.45 1.24 1.16 0 .68-.51 1.15-1.24 1.15Zm1.51 4.22c-.73 0-1.25-.47-1.25-1.16 0-.7.52-1.17 1.25-1.17h9.02c.73 0 1.24.47 1.24 1.17 0 .69-.51 1.16-1.24 1.16Z" />
  </svg>
);
export default SvgLine2HorizontaldecreasecirclefillBold;
