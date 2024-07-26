import * as React from "react";
const SvgSpeakerwave1FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.153 21.495c1.05 0 1.84-.8 1.84-1.84V1.875c0-1.04-.79-1.88-1.86-1.88-.68 0-1.19.27-1.91.95l-4.74 4.42a.35.35 0 0 1-.24.1h-3.25c-1.94 0-2.99 1.1-2.99 3.12v4.34c0 2.03 1.05 3.12 2.99 3.12h3.25c.09 0 .17.02.23.08l4.75 4.45c.67.64 1.22.92 1.93.92m5.98-5.19c.67.41 1.5.25 1.94-.36 1.01-1.39 1.6-3.25 1.6-5.21s-.59-3.82-1.6-5.23c-.44-.6-1.27-.76-1.94-.34-.72.46-.89 1.34-.29 2.3.6.89.93 2.05.93 3.27 0 1.21-.34 2.37-.93 3.27-.59.97-.43 1.84.29 2.3" />
  </svg>
);
export default SvgSpeakerwave1FillBold;
