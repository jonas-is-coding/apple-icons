import * as React from "react";
const SvgCharacterbubblefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.852 25.49c.53 0 .96-.24 1.61-.81l4.39-3.91h7.41c3.58 0 5.74-2.18 5.74-5.73v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.3 5.73 5.54 5.73h1.06v3.34c0 .84.46 1.38 1.25 1.38m2-9.49c-.86 0-1.37-.5-1.37-1.32 0-.23.05-.52.19-.95l2.59-7.33c.39-1.18 1.1-1.74 2.21-1.74 1.14 0 1.89.57 2.28 1.74l2.6 7.33c.13.43.18.72.18.95 0 .81-.51 1.32-1.38 1.32-.72 0-1.18-.39-1.4-1.26l-.49-1.52h-3.51l-.49 1.52c-.22.88-.68 1.26-1.41 1.26m2.42-4.81h2.47l-1.17-3.95h-.13Z" />
  </svg>
);
export default SvgCharacterbubblefillBold;
