import * as React from "react";
const SvgArrowuprightvideofillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.322 19.76h11.93c2.79 0 4.33-1.53 4.33-4.2V4.18c0-2.66-1.48-4.18-4.26-4.18h-12C1.602 0 .002 1.52.002 4.2v11.55c0 2.67 1.55 4.01 4.32 4.01m18.17-5.64 3.62 3.11c.61.5 1.18.84 1.78.84 1.02 0 1.74-.7 1.74-1.83V3.66c0-1.12-.72-1.83-1.74-1.83-.6 0-1.17.34-1.78.85l-3.62 3.11Zm-16.13.86c-.74 0-1.26-.5-1.26-1.18 0-.36.11-.67.39-.93l4.7-4.56 1.54-1.35-2.5.2h-1.81c-.66 0-1.19-.49-1.19-1.17s.51-1.23 1.16-1.23h6.54c1.02 0 1.57.56 1.57 1.57v6.38c0 .67-.54 1.15-1.23 1.15-.68 0-1.18-.51-1.18-1.15v-1.69l.2-2.45-1.35 1.5-4.7 4.53c-.26.25-.54.38-.88.38" />
  </svg>
);
export default SvgArrowuprightvideofillBold;
