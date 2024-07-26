import * as React from "react";
const SvgPoweroutlettypegfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m6.99-12.44c-.56 0-.96-.39-.96-.95v-3.31c0-.56.41-.96.96-.96h.94c.56 0 .96.4.96.96v3.31c0 .56-.39.95-.96.95Zm-5.05 7.14c-.57 0-.96-.4-.96-.97v-.94c0-.56.4-.95.96-.95h3.02c.57 0 .96.39.96.95v.94c0 .57-.38.97-.96.97Zm8.03 0c-.58 0-.96-.4-.96-.97v-.94c0-.56.4-.95.96-.95h3.02c.56 0 .97.39.97.95v.94c0 .57-.39.97-.97.97Z" />
  </svg>
);
export default SvgPoweroutlettypegfillBold;
