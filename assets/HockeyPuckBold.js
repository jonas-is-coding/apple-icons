import * as React from "react";
const SvgHockeypuckBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.822 19.977c7.18 0 12.84-3.28 12.84-7.41v-6.58c0-3.42-5.71-5.99-12.84-5.99-7.14 0-12.82 2.57-12.82 5.99v6.58c0 4.13 5.63 7.41 12.82 7.41m0-10.67c-5.76 0-10.02-1.51-10.02-3.32 0-1.73 4.26-3.16 10.02-3.16 5.75 0 10.02 1.43 10.02 3.16 0 1.81-4.27 3.32-10.02 3.32m0 2.82c4.06 0 7.67-.85 10.02-2.24v2.68c0 2.54-3.69 4.59-10.02 4.59s-10.02-2.05-10.02-4.59v-2.69c2.34 1.4 5.94 2.25 10.02 2.25" />
  </svg>
);
export default SvgHockeypuckBold;
