import * as React from "react";
const SvgPowerplugfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 7.725v2.96c0 1.68.9 2.57 2.59 2.57h4.42c1.4 0 2.11.56 3.02 1.74a8.79 8.79 0 0 0 6.96 3.41h3.27c1.22 0 1.95-.71 1.95-1.92v-1.52h5.46c1.02 0 1.84-.82 1.84-1.83s-.82-1.83-1.84-1.83h-5.46v-4.18h5.46c1.02 0 1.84-.82 1.84-1.82s-.82-1.84-1.84-1.84h-5.46v-1.56c0-1.21-.73-1.91-1.95-1.91h-3.27c-2.72 0-5.27 1.22-6.96 3.41-.91 1.19-1.62 1.75-3.02 1.75h-4.42c-1.69 0-2.59.87-2.59 2.57" />
  </svg>
);
export default SvgPowerplugfillBold;
