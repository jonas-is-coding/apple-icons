import * as React from "react";
const SvgCheckmarkcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.29-6.49c-.52 0-.93-.23-1.31-.69l-2.75-3.28c-.27-.33-.38-.62-.38-.96 0-.73.59-1.3 1.3-1.3.42 0 .75.16 1.07.54l2.04 2.52 4.57-7.27c.3-.49.69-.74 1.15-.74.7 0 1.34.52 1.34 1.24 0 .3-.11.61-.32.92l-5.44 8.32c-.31.44-.76.7-1.27.7" />
  </svg>
);
export default SvgCheckmarkcirclefillBold;
