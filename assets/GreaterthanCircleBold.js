import * as React from "react";
const SvgGreaterthancircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.82-4.64c.28 0 .51-.06.75-.17l6.46-3.24c.57-.28.86-.64.86-1.21 0-.56-.29-.97-.86-1.25l-6.46-3.3c-.25-.13-.47-.18-.76-.18-.73 0-1.26.53-1.26 1.25 0 .61.3.98 1.02 1.28l4.57 2.11v.11l-4.57 2.07c-.74.29-1.02.66-1.02 1.27 0 .73.53 1.26 1.27 1.26" />
  </svg>
);
export default SvgGreaterthancircleBold;
