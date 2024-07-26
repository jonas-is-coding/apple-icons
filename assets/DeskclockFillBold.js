import * as React from "react";
const SvgDeskclockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.1-14.48c-.48-.49-.47-1.22 0-1.7s1.21-.49 1.69 0l2.45 2.44 4.29-4.29c.48-.47 1.2-.46 1.7 0 .48.48.48 1.23 0 1.71l-5.14 5.13c-.48.48-1.22.49-1.7 0Zm-8.2 9.11v3.16c0 1.72.87 2.58 2.6 2.58h3.46c-2.59-1.28-4.63-3.21-6.06-5.74m24.76 0c-1.44 2.53-3.48 4.46-6.07 5.74h3.46c1.73 0 2.61-.86 2.61-2.58Z" />
  </svg>
);
export default SvgDeskclockfillBold;
