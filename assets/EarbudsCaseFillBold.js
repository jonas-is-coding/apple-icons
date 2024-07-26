import * as React from "react";
const SvgEarbudscasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 7.218h29.42v-.35c0-4.65-2.5-6.87-7.47-6.87H7.492c-4.95 0-7.49 2.2-7.49 6.87Zm7.49 12.67h14.45c5.09 0 7.48-2.36 7.48-7.38v-3.97H.002v3.97c0 5.02 2.39 7.38 7.49 7.38m7.22-6.82c-.67.01-1.24-.55-1.24-1.23s.57-1.23 1.24-1.23c.69 0 1.24.55 1.24 1.23s-.55 1.22-1.24 1.23" />
  </svg>
);
export default SvgEarbudscasefillBold;
