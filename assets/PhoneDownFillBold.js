import * as React from "react";
const SvgPhonedownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.512-.004c-5.13 0-10.31.98-12.87 3.59-1.04 1.05-1.64 2.38-1.64 3.9 0 1.4.44 2.98 1.94 3.04.31.04.61.01.98-.04l3.55-.58c1.25-.21 1.84-.68 2.18-1.89l.59-2.15c.11-.42.29-.59.74-.76 1.02-.35 2.53-.56 4.53-.55 2 0 3.51.2 4.53.55.46.17.63.34.74.76l.6 2.15c.34 1.21.92 1.68 2.18 1.89l3.55.58c.36.05.67.08.97.04 1.5-.06 1.95-1.64 1.95-3.04 0-1.52-.6-2.85-1.65-3.9-2.56-2.61-7.74-3.59-12.87-3.59" />
  </svg>
);
export default SvgPhonedownfillBold;
