import * as React from "react";
const SvgTrapezoidandlineverticalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m24.21 20.697-2.98-12.67c-.49-2.14-1.84-3.26-3.95-3.26h-3.59v-3.24c0-.93-.68-1.53-1.5-1.53-.85 0-1.53.6-1.53 1.53v3.24h3.03v19.82h7.2c2.6 0 3.87-1.49 3.32-3.89m-20.77 3.89h7.22v3.25c0 .92.68 1.52 1.53 1.52.82 0 1.5-.6 1.5-1.52v-3.25h-3.03V4.767H7.05c-2.11 0-3.45 1.12-3.96 3.26L.13 20.697c-.55 2.4.71 3.89 3.31 3.89" />
  </svg>
);
export default SvgTrapezoidandlineverticalfillBold;
