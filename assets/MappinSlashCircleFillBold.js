import * as React from "react";
const SvgMappinslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m1.32-13.68-3.91-3.94c.46-.95 1.43-1.6 2.58-1.61 1.62 0 2.95 1.32 2.95 2.95 0 1.12-.63 2.12-1.62 2.6m3.55 7.12-10.7-10.67a.69.69 0 0 1 0-.96.7.7 0 0 1 .97 0l10.68 10.69c.26.25.26.68 0 .94-.26.27-.7.26-.95 0m-6.26-10.65c0 .45.38.83.82.83.46 0 .83-.38.83-.83 0-.44-.37-.83-.83-.83-.44 0-.82.39-.82.83m.33 6.1 2.11 2.12v.85c0 1.39-.47 2.9-1.06 2.9-.6 0-1.05-1.54-1.05-2.9Z" />
  </svg>
);
export default SvgMappinslashcirclefillBold;
