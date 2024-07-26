import * as React from "react";
const SvgChevrondowncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m1.49-8.53c-.85.91-2.1.89-2.95-.01l-4.53-4.84c-.48-.51-.49-1.29-.04-1.73.52-.51 1.31-.52 1.78-.01l4.26 4.55 4.27-4.55c.47-.51 1.24-.5 1.77.01.46.43.44 1.23-.04 1.73Z" />
  </svg>
);
export default SvgChevrondowncirclefillBold;
