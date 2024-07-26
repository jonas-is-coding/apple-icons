import * as React from "react";
const SvgArrowupanddownandarrowleftandrightBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.589 15.22 3.75 3.27c1.11.94 2.29.25 2.29-.98v-1.88h5.79v5.8h-1.91c-1.19 0-1.88 1.2-.98 2.25l3.27 3.78c.65.78 1.73.83 2.41.01l3.26-3.75c.95-1.1.25-2.29-.97-2.29h-1.88v-5.8h5.78v1.88c0 1.23 1.18 1.92 2.28.98l3.77-3.26c.8-.69.76-1.77-.03-2.41l-3.76-3.27c-1.07-.9-2.26-.21-2.26.99v1.89h-5.78v-5.8h1.88c1.22 0 1.92-1.18.97-2.29L15.209.59c-.69-.82-1.77-.75-2.41.03l-3.27 3.75c-.9 1.07-.21 2.26.98 2.26h1.91v5.8h-5.79v-1.89c0-1.2-1.19-1.89-2.26-.99l-3.75 3.26c-.78.64-.85 1.72-.03 2.41" />
  </svg>
);
export default SvgArrowupanddownandarrowleftandrightBold;
