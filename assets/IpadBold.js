import * as React from "react";
const SvgIpadBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.056c0 2.36 1.5 3.82 3.9 3.82h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82Zm3.02-.48V4.296c0-.82.45-1.27 1.33-1.27h12.43c.88 0 1.32.45 1.32 1.27v19.28c0 .82-.44 1.28-1.32 1.28H4.352c-.88 0-1.33-.46-1.33-1.28m3.92.18h7.26c.39 0 .67-.26.67-.67 0-.4-.28-.67-.67-.67h-7.26c-.39 0-.67.27-.67.67 0 .41.28.67.67.67" />
  </svg>
);
export default SvgIpadBold;
