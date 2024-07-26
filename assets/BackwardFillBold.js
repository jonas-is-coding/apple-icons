import * as React from "react";
const SvgBackwardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.642 17.526v-7.1c.18.58.67 1.02 1.44 1.46l12.77 7.44c.45.26.93.38 1.37.38 1.06 0 1.96-.73 1.96-2.18V2.176c0-1.45-.9-2.18-1.96-2.18-.44 0-.92.12-1.37.39l-12.77 7.43c-.77.45-1.26.89-1.44 1.46v-7.1c0-1.45-.91-2.18-1.96-2.18-.45 0-.92.12-1.37.39l-12.78 7.43c-.98.57-1.53 1.15-1.53 2.04 0 .88.55 1.45 1.53 2.03l12.78 7.44c.45.26.92.38 1.37.38 1.05 0 1.96-.73 1.96-2.18" />
  </svg>
);
export default SvgBackwardfillBold;
