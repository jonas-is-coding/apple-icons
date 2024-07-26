import * as React from "react";
const SvgLockopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.852 24.044h11.42c1.88 0 2.84-.97 2.84-3.02v-8.71c0-1.79-.76-2.76-2.25-2.96v-2.91c0-2.38 1.54-3.76 3.47-3.76 1.92 0 3.47 1.38 3.47 3.76v2.56c0 .87.63 1.46 1.4 1.46.75 0 1.38-.57 1.38-1.46v-2.43c0-4.17-2.82-6.57-6.25-6.57-3.44 0-6.25 2.4-6.25 6.57v2.74h-9.23c-1.89 0-2.85.99-2.85 3v8.71c0 2.05.96 3.02 2.85 3.02m.82-2.68c-.46 0-.72-.26-.72-.79v-7.8c0-.52.26-.77.72-.77h9.78c.46 0 .7.25.7.77v7.8c0 .53-.24.79-.7.79Z" />
  </svg>
);
export default SvgLockopenBold;
