import * as React from "react";
const SvgCharactercirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.64-6.75c-.87 0-1.38-.5-1.38-1.32 0-.23.04-.53.18-.94l2.6-7.33c.39-1.19 1.11-1.75 2.22-1.75 1.14 0 1.89.56 2.27 1.75l2.59 7.33c.14.41.19.71.19.94 0 .82-.52 1.32-1.37 1.32-.73 0-1.2-.38-1.41-1.25l-.5-1.54h-3.49l-.51 1.54c-.21.87-.68 1.25-1.39 1.25m2.41-4.81h2.47l-1.18-3.95h-.12Z" />
  </svg>
);
export default SvgCharactercirclefillBold;
