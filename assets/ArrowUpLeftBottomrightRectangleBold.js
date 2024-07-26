import * as React from "react";
const SvgArrowupleftbottomrightrectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm11.6-2.59c.63 0 1.02-.46 1.02-1.14v-1.41l-.15-1.38 1.3 1.47 3.03 3.02c.25.25.54.38.88.38.65 0 1.16-.46 1.16-1.15 0-.31-.15-.61-.38-.84l-3.05-3.04-1.47-1.31 1.3.16h1.52c.68 0 1.13-.38 1.13-1.02 0-.62-.45-1.01-1.14-1.01h-4.82c-.83 0-1.34.45-1.34 1.34v4.79c0 .67.39 1.14 1.01 1.14" />
  </svg>
);
export default SvgArrowupleftbottomrightrectangleBold;
