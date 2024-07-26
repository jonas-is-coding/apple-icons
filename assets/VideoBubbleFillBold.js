import * as React from "react";
const SvgVideobubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m1.02-10.42c-1.3 0-2.04-.63-2.04-1.89v-5.5c0-1.25.76-1.96 2.04-1.96h5.79c1.31 0 1.99.71 1.99 1.96v5.43c0 1.25-.71 1.96-2.03 1.96Zm8.48-2.79V8.57l1.88-1.6c.28-.23.56-.38.83-.38.49 0 .82.32.82.85v5.97c0 .52-.33.86-.82.86-.27 0-.55-.15-.83-.39Z" />
  </svg>
);
export default SvgVideobubblefillBold;
