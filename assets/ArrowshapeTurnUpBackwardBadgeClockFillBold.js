import * as React from "react";
const SvgArrowshapeturnupbackwardbadgeclockfillBold = ({
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
    <path d="M12.024 22.349c1.1 0 1.92-.83 1.92-1.92v-3.78h.21c1 0 1.89.09 2.69.27.5-3.4 3.22-6.13 6.64-6.64-1.87-2.93-5.02-4.53-9.33-4.53h-.21v-3.79c0-1.09-.82-1.96-1.93-1.96-.71 0-1.22.28-1.99.99l-9.33 8.64c-.48.45-.69 1.02-.69 1.54 0 .5.22 1.1.69 1.55l9.33 8.69c.7.65 1.27.94 2 .94m12.63 1.94c3.37 0 6.17-2.81 6.17-6.17 0-3.38-2.79-6.17-6.17-6.17s-6.17 2.79-6.17 6.17c0 3.37 2.79 6.17 6.17 6.17m-2.81-5.04c-.55 0-.97-.43-.97-.97 0-.55.43-.97.97-.97h1.92v-2.45c0-.54.42-.96.97-.96s.99.42.99.96v3.42c0 .55-.44.97-.99.97Z" />
  </svg>
);
export default SvgArrowshapeturnupbackwardbadgeclockfillBold;
