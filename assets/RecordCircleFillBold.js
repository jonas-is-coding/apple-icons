import * as React from "react";
const SvgRecordcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-7.52a4.865 4.865 0 0 1 0-9.73 4.87 4.87 0 0 1 4.87 4.87c0 2.68-2.18 4.86-4.87 4.86" />
  </svg>
);
export default SvgRecordcirclefillBold;
