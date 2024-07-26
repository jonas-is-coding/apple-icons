import * as React from "react";
const SvgBellfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.231 20.406h18.96c1.36 0 2.22-.81 2.22-2 0-1.34-1.04-2.42-2.14-3.38-.9-.79-1.08-2.49-1.31-4.34-.32-3.99-1.69-6.94-4.6-7.98-.55-1.57-1.92-2.71-3.65-2.71-1.74 0-3.12 1.14-3.66 2.71-2.91 1.04-4.28 3.99-4.59 7.98-.25 1.85-.41 3.55-1.32 4.34-1.11.96-2.14 2.04-2.14 3.38 0 1.19.87 2 2.23 2m9.48 5.05c2.21 0 3.83-1.54 3.97-3.35h-7.95c.14 1.81 1.76 3.35 3.98 3.35" />
  </svg>
);
export default SvgBellfillBold;
