import * as React from "react";
const SvgTentcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.42-6.88c-.85 0-1.2-.8-.82-1.51l5.25-10.53c.42-.84 1.56-.85 2 .01l5.24 10.52c.37.71.02 1.51-.82 1.51Zm2.38-1.28h2.08l.96-4.16.96 4.16h2.09l-2.56-5.52a.55.55 0 0 0-.49-.34c-.18 0-.38.13-.49.34Z" />
  </svg>
);
export default SvgTentcirclefillBold;
