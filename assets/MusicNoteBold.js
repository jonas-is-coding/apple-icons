import * as React from "react";
const SvgMusicnoteBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.202 5.64V1.27c0-.84-.71-1.41-1.53-1.24l-6.05 1.33c-.94.19-1.45.72-1.45 1.54l.02 12.9c.03.43-.16.67-.51.74l-1.9.4c-2.52.53-3.78 1.85-3.78 3.86 0 2.04 1.53 3.43 3.72 3.43 2.28 0 4.7-1.72 4.7-4.97V8.5c0-.46-.01-.46.43-.56l5.45-1.19c.55-.12.9-.55.9-1.11" />
  </svg>
);
export default SvgMusicnoteBold;
