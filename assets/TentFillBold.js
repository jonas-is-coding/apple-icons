import * as React from "react";
const SvgTentfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.77 25.186h21.34c1.72 0 2.41-1.58 1.69-3.03l-4.08-8.17 7.49 10.46c.35.49.83.73 1.33.73.77 0 1.35-.5 1.35-1.38v-3.66c0-.62-.51-1.15-1.15-1.15-.63 0-1.16.53-1.16 1.15v.97L20.2.976c-.93-1.3-2.57-1.3-3.5 0L2.31 21.106v-.97c0-.62-.52-1.15-1.16-1.15-.63 0-1.15.53-1.15 1.15v3.66c0 .88.6 1.38 1.36 1.38.49 0 .97-.24 1.34-.73l7.48-10.46-4.07 8.17c-.74 1.45-.05 3.03 1.66 3.03m4.65-2.55 5.01-10.88c.21-.46.61-.68 1.02-.68.39 0 .79.22 1 .68l5.02 10.88h-4.11l-1.91-8.2-1.93 8.2Z" />
  </svg>
);
export default SvgTentfillBold;
