import * as React from "react";
const SvgEraserlinedashedfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.177 9.731 10.94 10.93 8.77-8.77c1.29-1.28 1.26-2.92-.05-4.22l-6.67-6.68c-1.3-1.3-2.94-1.33-4.22-.04Zm-2.69 8.81 4.81 4.81c1.93 1.93 4.15 1.98 5.99.14l1.33-1.33-10.93-10.94-1.34 1.33c-1.85 1.84-1.79 4.06.14 5.99m12.7 5.86h8.05c.83 0 1.51-.68 1.51-1.51s-.68-1.51-1.51-1.51h-5.03Zm12.77 0h5.56c.84 0 1.52-.68 1.52-1.51s-.68-1.51-1.52-1.51h-5.56c-.83 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51" />
  </svg>
);
export default SvgEraserlinedashedfillBold;
