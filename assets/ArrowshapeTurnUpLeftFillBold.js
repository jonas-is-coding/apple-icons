import * as React from "react";
const SvgArrowshapeturnupleftfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.024 22.349c1.1 0 1.92-.83 1.92-1.92v-3.78h.21c3.89 0 6.12 1.43 7.64 4.23.57 1.01 1.19 1.33 1.98 1.33 1.13 0 1.83-1.1 1.83-3.28 0-8.26-3.85-13.18-11.45-13.18h-.21v-3.79c0-1.09-.82-1.96-1.93-1.96-.71 0-1.22.28-1.99.99l-9.33 8.64c-.48.45-.69 1.02-.69 1.54 0 .5.22 1.1.69 1.55l9.33 8.69c.7.65 1.27.94 2 .94" />
  </svg>
);
export default SvgArrowshapeturnupleftfillBold;
