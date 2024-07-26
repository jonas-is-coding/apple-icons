import * as React from "react";
const SvgIndianrupeesignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.942 21.455c1 0 1.93-.83 1.93-1.85 0-.57-.31-1.05-.74-1.48l-5.6-5.27.94-.01c3.63-.17 6.35-2.32 6.75-5.69h2.26c.41 0 .71-.3.71-.69 0-.4-.3-.7-.71-.7h-2.24c-.14-1.83-.88-3.37-2.3-4.38l4.54.01c.41 0 .71-.31.71-.7 0-.4-.3-.7-.71-.7H1.422c-.87 0-1.42.53-1.42 1.4v.1c0 .86.55 1.39 1.42 1.39h3.54c2.16 0 3.89.82 4.21 2.88H.912c-.4 0-.7.3-.7.7 0 .39.3.69.7.69h8.28c-.31 2.13-2.09 2.88-4.27 2.88h-2.99c-1.06 0-1.9.52-1.9 1.65v.1c0 .86.52 1.43 1.11 2.01l7.08 6.78c.56.54 1.11.88 1.72.88" />
  </svg>
);
export default SvgIndianrupeesignBold;
