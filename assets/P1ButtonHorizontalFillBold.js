import * as React from "react";
const SvgP1ButtonhorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.352 22.112h9.56c6.98 0 9.35-2.45 9.35-9.24v-3.63c0-6.79-2.37-9.24-9.35-9.24h-9.56c-6.98 0-9.35 2.45-9.35 9.24v3.63c0 6.79 2.37 9.24 9.35 9.24m8.92-6.12c-.59 0-1.06-.45-1.06-1.05v-6.69l-.86.69c-.17.13-.31.19-.51.19-.37 0-.71-.26-.71-.75 0-.35.15-.61.44-.83l1.14-.88c.37-.29.8-.55 1.39-.55.75 0 1.22.42 1.22 1.18v7.64c0 .6-.47 1.05-1.05 1.05m-8.93-.01c-.62 0-1.04-.36-1.04-1.09v-7.52c0-.7.39-1.11 1.05-1.11h2.2c1.76 0 2.76 1.47 2.76 3.31s-1.01 3.31-2.9 3.31h-1.01v2.01c0 .68-.37 1.09-1.06 1.09m1.06-4.72h.59c.91 0 1.23-.75 1.23-1.69 0-.95-.34-1.65-1.22-1.65h-.6Z" />
  </svg>
);
export default SvgP1ButtonhorizontalfillBold;
