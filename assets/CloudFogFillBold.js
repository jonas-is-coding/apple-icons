import * as React from "react";
const SvgCloudfogfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.972 18.696h14.71c4.07 0 7.13-3.1 7.13-6.99 0-3.97-3.13-6.98-7.25-6.98-1.4-2.72-3.99-4.73-7.84-4.73-4.64 0-8.3 3.45-8.83 7.84-2.22.73-3.89 2.65-3.89 5.28 0 3.13 2.32 5.58 5.97 5.58m15.5 2.76h-14.9c-.51 0-.91.38-.91.87 0 .5.4.88.91.88h14.9c.51 0 .91-.38.91-.88 0-.49-.4-.87-.91-.87m0 3.97h-14.9c-.51 0-.91.38-.91.88 0 .51.4.87.91.87h14.9c.51 0 .91-.36.91-.87 0-.5-.4-.88-.91-.88" />
  </svg>
);
export default SvgCloudfogfillBold;
