import * as React from "react";
const SvgAppleterminalcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.7-7.07c-1.24 0-1.93-.66-1.93-1.92v-6.74c0-1.27.69-1.93 1.93-1.93h9.4c1.26 0 1.95.66 1.95 1.93v6.74c0 1.25-.69 1.92-1.95 1.92Zm.41-6.2c-.59.35-.09 1.27.58.86l1.6-1.01c.4-.26.4-.87 0-1.12l-1.6-1c-.66-.41-1.17.51-.58.86l1.16.71Zm2.59.77c0 .26.24.5.5.5h2.14c.29 0 .53-.24.53-.5 0-.28-.24-.5-.53-.5h-2.14c-.26 0-.5.22-.5.5" />
  </svg>
);
export default SvgAppleterminalcirclefillBold;
