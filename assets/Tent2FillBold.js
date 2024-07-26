import * as React from "react";
const SvgTent2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.04 25.278h21.35c1.71 0 2.4-1.59 1.67-3.04L24.55 1.228c-.39-.77-1.06-1.23-1.84-1.23-.77 0-1.44.44-1.83 1.21l-5.33 10.66-4.36-8.7c-.34-.66-.94-1.08-1.64-1.08s-1.3.42-1.64 1.08L.25 18.488c-.65 1.28.01 2.72 1.52 2.72h9.12l-.52 1.03c-.74 1.45-.03 3.04 1.67 3.04m-1.25-6.63-1.24-5.27-1.23 5.27H5.44l3.41-7.36c.14-.32.42-.48.7-.48s.58.16.72.48l2.68 5.79-.79 1.57Zm5.9 4.06 5.01-10.88c.21-.45.61-.67 1.01-.67.41 0 .8.22 1.01.67l5.02 10.88h-4.12l-1.91-8.19-1.91 8.19Z" />
  </svg>
);
export default SvgTent2FillBold;
