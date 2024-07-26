import * as React from "react";
const SvgSpeakerminusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.162 21.495c1.04 0 1.84-.8 1.84-1.84V1.875c0-1.04-.8-1.88-1.85-1.88-.68 0-1.21.27-1.93.95l-4.74 4.42c-.06.06-.14.1-.22.1h-3.27c-1.94 0-2.99 1.1-2.99 3.12v4.34c0 2.03 1.05 3.12 2.99 3.12h3.25c.1 0 .17.02.24.08l4.74 4.45c.68.64 1.24.92 1.94.92m6.65-9.45h8.37c.79 0 1.35-.51 1.35-1.29s-.55-1.31-1.35-1.31h-8.37c-.79 0-1.34.53-1.34 1.31s.56 1.29 1.34 1.29" />
  </svg>
);
export default SvgSpeakerminusfillBold;
