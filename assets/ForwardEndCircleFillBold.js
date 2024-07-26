import * as React from "react";
const SvgForwardendcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.19-8.76c0 .53-.27.8-.8.8h-1.27c-.53 0-.81-.27-.81-.8v-3.14c-.12.19-.29.35-.54.49l-5.31 3.12c-.24.14-.47.21-.71.21-.52 0-.95-.39-.95-1.08v-6.39c0-.69.43-1.07.95-1.07.24 0 .47.05.71.19l5.31 3.12c.26.14.44.31.54.49v-3.15c0-.51.28-.8.81-.8h1.27c.52 0 .8.27.8.8Z" />
  </svg>
);
export default SvgForwardendcirclefillBold;
