import * as React from "react";
const SvgIphonegen1BadgeplayBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.022 21.921V5.181h11.35v9.1c.42-.08.86-.11 1.31-.11.58 0 1.17.08 1.71.22V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56v19.99c0 2.12 1.48 3.55 3.69 3.55h5.87a7.5 7.5 0 0 1-1.79-5.18Zm3.03-19.24c0-.36.24-.6.59-.6h4.1c.36 0 .6.24.6.6 0 .35-.24.59-.6.59h-4.1c-.35 0-.59-.24-.59-.59m9.63 25.58c3.36 0 6.17-2.8 6.17-6.17 0-3.38-2.79-6.17-6.17-6.17s-6.17 2.79-6.17 6.17c0 3.39 2.79 6.17 6.17 6.17m-2.08-3.8v-4.74c0-.6.6-.87 1.11-.56l3.82 2.32c.51.32.52.94.04 1.22l-3.86 2.32c-.51.3-1.11.03-1.11-.56" />
  </svg>
);
export default SvgIphonegen1BadgeplayBold;
