import * as React from "react";
const SvgBahtsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.202 23.546h4.2v1.9c0 .42.29.69.7.69s.69-.27.69-.69v-1.9h.96c4.1 0 7.21-1.99 7.21-5.9 0-2.76-2.1-4.83-4.99-5.04v-.11c2.31-.37 3.98-2.27 3.98-4.57 0-3.5-2.92-5.17-6.37-5.17h-.79V.716c0-.43-.27-.72-.69-.72s-.7.29-.7.72v2.04h-4.2c-1.3 0-2.2.82-2.2 2.28v16.23c0 1.42.88 2.28 2.2 2.28m1.78-17.78h2.42v5.72h-2.42Zm7.08 2.78c0 1.88-1.41 2.77-3.27 2.92v-5.7c1.88.05 3.27.93 3.27 2.78m-7.08 12v-6.35h2.42v6.35Zm7.84-3.21c0 2.26-1.66 3.2-4.03 3.21v-6.35c2.32.03 4.03.91 4.03 3.14" />
  </svg>
);
export default SvgBahtsignBold;
