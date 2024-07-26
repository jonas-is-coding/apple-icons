import * as React from "react";
const SvgLessthancirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m3.12-7.29c-.3 0-.55-.05-.83-.19l-7.03-3.51c-.65-.31-.96-.71-.96-1.35 0-.63.31-1.06.96-1.39l7.03-3.59c.28-.13.53-.18.84-.18.82 0 1.41.58 1.41 1.4 0 .67-.33 1.09-1.14 1.42l-4.91 2.25v.11l4.91 2.21c.82.32 1.14.73 1.14 1.41 0 .83-.59 1.41-1.42 1.41" />
  </svg>
);
export default SvgLessthancirclefillBold;
