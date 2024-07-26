import * as React from "react";
const SvgWalletbifoldfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m8.302 3.277 14.84.01v-.14c-.3-2.63-2.45-3.84-5.76-2.74Zm-4.26 21.99h19.11c2.62 0 4.05-1.43 4.05-4.01v-1.42h-4.64c-2.96 0-4.97-1.95-4.97-4.76 0-2.82 2-4.78 4.97-4.78h4.64v-1.24c0-2.59-1.43-4.01-4.05-4.01H4.042c-2.61 0-4.04 1.42-4.04 4.01v12.2c0 2.59 1.43 4.01 4.04 4.01m18.52-7.28h4.8c1.02 0 1.58-.59 1.58-1.58v-2.66c0-1-.56-1.59-1.58-1.59h-4.8c-1.76 0-3.11.96-3.11 2.92 0 1.92 1.35 2.91 3.11 2.91m.06-1.57c-.74 0-1.34-.6-1.34-1.34s.6-1.33 1.34-1.33a1.336 1.336 0 0 1 0 2.67" />
  </svg>
);
export default SvgWalletbifoldfillBold;
