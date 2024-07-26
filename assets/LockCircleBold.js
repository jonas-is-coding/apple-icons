import * as React from "react";
const SvgLockcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.15-4.86c0 .91.41 1.33 1.27 1.33h5.77c.84 0 1.25-.42 1.25-1.33v-4.41c0-.76-.31-1.18-.9-1.27v-1.22c0-2.16-1.32-3.6-3.24-3.6-1.93 0-3.23 1.44-3.23 3.6v1.2c-.61.11-.92.53-.92 1.29Zm2.55-5.73v-1.27c0-1.16.63-1.91 1.6-1.91.98 0 1.6.74 1.6 1.91v1.27Z" />
  </svg>
);
export default SvgLockcircleBold;
