import * as React from "react";
const SvgSwitchprogrammablefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.112 26.223h10.44c2.66 0 4.12-1.46 4.12-4.13V4.133c0-2.67-1.46-4.13-4.12-4.13H4.112c-2.66 0-4.11 1.46-4.11 4.13v17.96c0 2.67 1.45 4.13 4.11 4.13m1.3-15.3c-.56 0-.78-.24-.78-.79v-5.25c0-.55.22-.77.78-.77h7.81c.56 0 .79.22.79.77v5.25c0 .55-.23.79-.79.79Zm0 11.19c-.56 0-.78-.22-.78-.78v-5.24c0-.57.22-.79.78-.79h7.81c.56 0 .79.22.79.79v5.24c0 .56-.23.78-.79.78Z" />
  </svg>
);
export default SvgSwitchprogrammablefillBold;
