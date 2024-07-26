import * as React from "react";
const SvgDoorgarageopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.512 25.663c.83 0 1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h23.03c.39 0 .65.26.65.66v20.46a1.515 1.515 0 0 0 3.03 0V3.313c0-2.04-1.28-3.31-3.36-3.31H3.352c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51m3.3-15.67h20.76c.2 0 .36-.16.36-.35v-4.83c0-.2-.16-.35-.36-.35H4.812c-.19 0-.36.15-.36.35v4.83c0 .19.17.35.36.35m8.01-2.05c-.41 0-.73-.31-.73-.72 0-.4.32-.72.73-.72h4.74c.41 0 .73.32.73.72 0 .41-.32.72-.73.72Z" />
  </svg>
);
export default SvgDoorgarageopenBold;
