import * as React from "react";
const SvgTagcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.65-6.19-3.29-3.29c-.82-.85-.92-1.77-.08-2.63l5.76-5.79c.45-.44.75-.73 1.46-.73h2.28c.59 0 .93.19 1.33.59l1.16 1.15c.4.41.54.74.54 1.32v2.24c0 .72-.28 1.02-.72 1.45l-5.81 5.79c-.87.86-1.78.73-2.63-.1m4.5-7.81c.41.4 1.06.41 1.46 0 .41-.39.4-1.05 0-1.44-.39-.4-1.03-.4-1.44 0-.4.4-.4 1.06-.02 1.44" />
  </svg>
);
export default SvgTagcirclefillBold;
