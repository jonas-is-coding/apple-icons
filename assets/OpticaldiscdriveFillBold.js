import * as React from "react";
const SvgOpticaldiscdrivefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.122 8.95h17.91c1.3 0 2.47.3 3.48.82l-3.02-6.78c-.84-1.91-2.47-2.99-4.69-2.99h-9.44c-2.22 0-3.84 1.08-4.7 2.99l-3 6.77c1-.51 2.17-.81 3.46-.81m0 12.07h17.91c3.04 0 5.12-2.06 5.12-5.08 0-3.03-2.08-5.09-5.12-5.09H5.122c-3.05 0-5.12 2.06-5.12 5.09 0 3.02 2.07 5.08 5.12 5.08m-.31-5.08c0-.57.46-1.03 1.04-1.03h16.46c.56 0 1.02.46 1.02 1.03 0 .56-.46 1.03-1.02 1.03H5.852c-.58 0-1.04-.47-1.04-1.03" />
  </svg>
);
export default SvgOpticaldiscdrivefillBold;
