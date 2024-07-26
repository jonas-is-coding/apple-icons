import * as React from "react";
const SvgVisionproBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.072 15.982c2.62 0 4.9 4.09 9.87 4.09 4.74 0 8.2-4.17 8.2-9.81 0-9.38-8.22-10.26-18.07-10.26-9.86 0-18.07.89-18.07 10.26 0 5.64 3.46 9.81 8.21 9.81 4.97 0 7.23-4.09 9.86-4.09m0-2.88c-4.27 0-5.68 4.07-9.9 4.07-3.24 0-5.29-2.72-5.29-6.91 0-6.77 5.56-7.37 15.19-7.37 9.64 0 15.19.59 15.19 7.37 0 4.19-2.05 6.91-5.29 6.91-4.21 0-5.62-4.07-9.9-4.07" />
  </svg>
);
export default SvgVisionproBold;
