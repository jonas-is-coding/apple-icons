import * as React from "react";
const SvgArrowupbackwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.83-8.86c-.74 0-1.19-.53-1.19-1.35v-5.61c0-1.06.6-1.61 1.62-1.61h5.63c.83 0 1.36.47 1.36 1.22 0 .73-.53 1.2-1.36 1.2h-1.77l-1.45-.19 1.66 1.47 3.93 3.91c.27.28.43.66.43 1.02 0 .84-.61 1.39-1.38 1.39-.41 0-.76-.14-1.08-.45l-3.88-3.89-1.46-1.65.16 1.52v1.67c0 .83-.47 1.35-1.22 1.35" />
  </svg>
);
export default SvgArrowupbackwardcirclefillBold;
