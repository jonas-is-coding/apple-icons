import * as React from "react";
const SvgLine3HorizontaldecreasecirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6-14.61c-.72 0-1.24-.46-1.24-1.15 0-.7.52-1.16 1.24-1.16h12.03c.73 0 1.24.46 1.24 1.16 0 .69-.51 1.15-1.24 1.15Zm1.51 4.07c-.73 0-1.25-.46-1.25-1.16 0-.69.52-1.16 1.25-1.16h9.02c.73 0 1.24.47 1.24 1.16 0 .7-.51 1.16-1.24 1.16Zm1.54 4.05c-.74 0-1.24-.46-1.24-1.15s.5-1.16 1.24-1.16h5.93c.74 0 1.24.47 1.24 1.16s-.5 1.15-1.24 1.15Z" />
  </svg>
);
export default SvgLine3HorizontaldecreasecirclefillBold;
