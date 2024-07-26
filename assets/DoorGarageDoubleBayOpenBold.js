import * as React from "react";
const SvgDoorgaragedoublebayopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.512 25.663c.83 0 1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h29.35c.4 0 .66.26.66.66v20.46c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.313c0-2.04-1.27-3.31-3.34-3.31H3.352c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51m3.3-15.67h27.1c.19 0 .35-.16.35-.35v-4.83c0-.2-.16-.35-.35-.35h-27.1c-.19 0-.36.15-.36.35v4.83c0 .19.17.35.36.35m11.04-2.05c-.41 0-.72-.31-.72-.72 0-.4.31-.72.72-.72h5.01c.41 0 .72.32.72.72 0 .41-.31.72-.72.72Z" />
  </svg>
);
export default SvgDoorgaragedoublebayopenBold;
