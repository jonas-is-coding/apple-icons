import * as React from "react";
const SvgSnowboardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.067 28.27c2.85 2.86 6.55 2.72 9.55-.28 1.26-1.24 3.73-4.83 7.63-8.74 3.92-3.91 7.5-6.37 8.75-7.63 3-3.02 3.13-6.71.27-9.55-2.85-2.86-6.54-2.73-9.55.27-1.27 1.25-3.73 4.82-7.63 8.74-3.92 3.9-7.5 6.37-8.75 7.64-3 3-3.13 6.7-.27 9.55m13.4-15.05c-.59-.6-.62-1.52-.02-2.11.59-.58 1.52-.6 2.12 0l1.65 1.67c.59.59.59 1.51 0 2.08-.59.6-1.51.61-2.11 0Zm-4.38 4.37c-.6-.58-.6-1.52 0-2.12.59-.58 1.49-.57 2.09.03l1.66 1.66c.6.6.6 1.49 0 2.09-.57.58-1.51.59-2.11 0Z" />
  </svg>
);
export default SvgSnowboardfillBold;
