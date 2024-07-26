import * as React from "react";
const SvgShippingboxBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.772 20.685 9.36 5.1c.62.34 1.35.34 1.97 0l9.36-5.1c1.22-.67 1.77-1.39 1.77-3.02v-9.8c0-1.31-.49-2.16-1.64-2.78l-8.14-4.46c-1.5-.83-3.17-.83-4.67 0l-8.14 4.46c-1.15.62-1.64 1.47-1.64 2.78v9.8c0 1.63.55 2.35 1.77 3.02m15.82-12.4-8.01-4.4 1.39-.78c.77-.42 1.52-.43 2.29 0l6.85 3.78Zm-5.47 2.99-8-4.39 2.65-1.48 8.02 4.39Zm-8.71 7.16c-.58-.33-.79-.67-.79-1.23v-8l8.12 4.47v8.84Zm17.41 0-7.33 4.08v-8.84l8.12-4.47v8c0 .56-.21.9-.79 1.23" />
  </svg>
);
export default SvgShippingboxBold;
