import * as React from "react";
const SvgPersonfillandarrowleftandarrowrightoutwardBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.15 10.39c2.64 0 4.79-2.3 4.79-5.25 0-2.86-2.18-5.14-4.79-5.14-2.63 0-4.79 2.31-4.79 5.16 0 2.93 2.15 5.23 4.79 5.23m6.73-5.23c0 .62.5 1.11 1.12 1.11h2.92v1.46c0 .92.89 1.26 1.63.7l3.38-2.57a.847.847 0 0 0 0-1.37l-3.38-2.58c-.73-.55-1.63-.25-1.63.71v1.42H24c-.62 0-1.12.49-1.12 1.12m-22.53.7 3.39 2.57c.73.56 1.63.22 1.63-.7V6.27h2.92c.62 0 1.11-.49 1.11-1.11 0-.63-.49-1.12-1.11-1.12H5.37V2.62c0-.96-.9-1.26-1.63-.71L.35 4.49a.842.842 0 0 0 0 1.37m8.1 15.53h15.39c1.43 0 2.27-.69 2.27-1.84 0-3-3.89-7.1-9.96-7.1-6.08 0-9.97 4.1-9.97 7.1 0 1.15.84 1.84 2.27 1.84" />
  </svg>
);
export default SvgPersonfillandarrowleftandarrowrightoutwardBold;
