import * as React from "react";
const SvgWaveformpathecgrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v6.04h-2.84c-.51 0-.83.26-.99.73l-.52 1.45-2.19-6.61c-.25-.79-1.41-.8-1.74.01l-1.81 4.42h-2.38c-.53 0-.84.27-1.01.73l-.51 1.45-2.2-6.61c-.24-.79-1.39-.8-1.73.01l-1.81 4.42h-2.19v1.85h2.8c.52 0 .8-.25 1.01-.71l1.03-2.54 2.21 7.09c.23.8 1.48.79 1.75-.02l1.21-3.82h2.38c.52 0 .8-.25 1-.71l1.1-2.55 2.19 7.1c.25.8 1.5.79 1.76-.02l1.2-3.82h2.28v5.57c0 .99-.51 1.45-1.44 1.45Z" />
  </svg>
);
export default SvgWaveformpathecgrectangleBold;
