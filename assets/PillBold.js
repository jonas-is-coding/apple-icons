import * as React from "react";
const SvgPillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.961 22.698c2.7 2.69 6.69 2.6 9.56-.27l10.89-10.89c2.88-2.88 2.98-6.87.27-9.59-2.69-2.69-6.7-2.59-9.56.27l-10.89 10.89c-2.88 2.88-2.97 6.87-.27 9.59m13.15-18.43c1.72-1.72 4-2.05 5.66-.4 1.65 1.67 1.35 3.92-.4 5.68l-4.46 4.46-5.26-5.26Zm-11.24 16.5c-1.65-1.64-1.33-3.91.41-5.66l4.49-4.5 5.27 5.26-4.5 4.5c-1.72 1.74-4 2.06-5.67.4" />
  </svg>
);
export default SvgPillBold;
