import * as React from "react";
const SvgLockrectanglestackfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.842 1.748h14.94c-.09-1.13-.8-1.75-1.99-1.75H6.832c-1.19 0-1.9.62-1.99 1.75m-2.35 3.62h19.63c-.15-1.2-.81-1.9-2.18-1.9H4.662c-1.37 0-2.01.7-2.17 1.9m1.5 21.71h16.62c2.59 0 4-1.4 4-3.97v-11.83c0-2.56-1.41-3.97-4-3.97H3.992c-2.59 0-3.99 1.41-3.99 3.97v11.83c0 2.57 1.4 3.97 3.99 3.97m3.97-5.2v-4.63c0-.81.31-1.25.94-1.36v-1.26c0-2.28 1.39-3.8 3.41-3.8 2.03 0 3.41 1.52 3.41 3.8v1.27c.63.1.95.54.95 1.35v4.63c0 .97-.43 1.41-1.32 1.41h-6.07c-.89 0-1.32-.44-1.32-1.41m2.68-6.03h3.35v-1.33c0-1.22-.67-2-1.69-2-1 0-1.66.79-1.66 2Z" />
  </svg>
);
export default SvgLockrectanglestackfillBold;
