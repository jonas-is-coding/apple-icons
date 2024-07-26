import * as React from "react";
const SvgPersoncroprectanglestackfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.842 1.748h14.94c-.09-1.13-.8-1.75-1.99-1.75H6.832c-1.19 0-1.9.62-1.99 1.75m-2.35 3.62h19.63c-.15-1.2-.81-1.9-2.18-1.9H4.662c-1.37 0-2.01.7-2.17 1.9m1.5 21.71h16.62c2.59 0 4-1.4 4-3.97v-11.83c0-2.56-1.41-3.97-4-3.97H3.992c-2.59 0-3.99 1.41-3.99 3.97v11.83c0 2.57 1.4 3.97 3.99 3.97m8.36-8.09c-1.98-.03-3.5-1.69-3.52-3.85 0-2.04 1.56-3.77 3.52-3.77 1.97 0 3.52 1.73 3.52 3.77 0 2.16-1.53 3.86-3.52 3.85m-6.42 5.27c.92-2.25 3.43-3.79 6.42-3.79s5.51 1.54 6.43 3.79Z" />
  </svg>
);
export default SvgPersoncroprectanglestackfillBold;
