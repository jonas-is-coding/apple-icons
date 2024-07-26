import * as React from "react";
const SvgBoltcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.21-11.59c0-.19.07-.39.21-.55l6.46-7.9c.61-.73 1.59-.21 1.25.69l-2.05 5.38h3.83c.38 0 .68.28.68.64 0 .19-.08.39-.22.55l-6.46 7.9c-.61.73-1.59.21-1.24-.69l2.04-5.38h-3.83c-.38 0-.67-.28-.67-.64" />
  </svg>
);
export default SvgBoltcirclefillBold;
