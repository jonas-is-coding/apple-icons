import * as React from "react";
const SvgBubblerightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.852 25.44c1.16 0 1.87-.78 1.87-2.06v-2.6h.74c3.24 0 5.54-2.19 5.54-5.74v-9.3c0-3.56-2.16-5.74-5.74-5.74H5.742C2.152 0 .002 2.18.002 5.74v9.3c0 3.55 2.15 5.74 5.74 5.74h6.74l3.96 3.47c.98.85 1.62 1.19 2.41 1.19m-.72-3.35-3.67-3.6c-.59-.58-.95-.74-1.76-.74h-6.77c-1.95 0-2.91-.98-2.91-2.9V5.92c0-1.92.96-2.9 2.91-2.9h15.14c1.96 0 2.9.98 2.9 2.9v8.93c0 1.92-.94 2.9-2.9 2.9h-1.85c-.72 0-1.09.3-1.09 1.09Z" />
  </svg>
);
export default SvgBubblerightBold;
