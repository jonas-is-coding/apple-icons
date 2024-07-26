import * as React from "react";
const SvgArrowturnuprightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.852 19.185c.98 0 1.63-.67 1.63-1.68 0-.5-.06-1.09-.06-1.9 0-3.2 1.16-4.5 4.35-4.5h6.75l2.67-.16-2.7 2.43-2.61 2.61c-.32.32-.54.71-.54 1.22 0 .91.68 1.62 1.68 1.62.41 0 .83-.19 1.18-.53l7.64-7.63c.33-.32.53-.8.53-1.26 0-.45-.2-.93-.53-1.25l-7.62-7.62c-.37-.36-.79-.54-1.2-.54-1 0-1.68.7-1.68 1.61 0 .52.22.91.54 1.22l2.61 2.62 2.69 2.42-2.66-.15h-7.02c-5.19 0-7.5 2.61-7.5 7.86 0 .68.02 1.33.14 1.99.12.74.6 1.62 1.71 1.62" />
  </svg>
);
export default SvgArrowturnuprightBold;
