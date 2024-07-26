import * as React from "react";
const SvgEurozonesigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.97-7.87c-.59 0-.92-.36-.92-.97v-7.06c0-.6.33-.97.92-.97h3.37c.5 0 .82.26.82.75s-.32.77-.82.77h-2.43v2.23h2.33c.44 0 .74.25.74.7s-.29.71-.74.71h-2.33v2.32h2.43c.49 0 .82.29.82.77 0 .49-.32.75-.82.75Zm6.33 0c-.51 0-.92-.28-.92-.84 0-.26.08-.53.2-.74l3.39-5.84v-.06h-2.79c-.48 0-.83-.28-.83-.77 0-.48.35-.75.83-.75h3.94c.59 0 .93.34.93.88 0 .31-.11.54-.22.72l-3.36 5.82v.06h2.99c.46 0 .73.3.73.77 0 .46-.27.75-.73.75Z" />
  </svg>
);
export default SvgEurozonesigncirclefillBold;
