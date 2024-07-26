import * as React from "react";
const SvgNotequalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.742 15.855h1.42l-.91 1.51c-.52.9-.31 1.88.58 2.38.87.49 1.88.2 2.37-.67l1.97-3.22h8.54c.93 0 1.75-.81 1.75-1.78 0-.96-.82-1.77-1.75-1.77h-6.38l2.8-4.58h3.58c.93 0 1.75-.81 1.75-1.79 0-.96-.82-1.77-1.75-1.77h-1.43l.98-1.58c.48-.86.22-1.84-.65-2.33-.87-.5-1.83-.26-2.37.68l-1.96 3.23h-8.54c-.89 0-1.74.81-1.74 1.77 0 .98.85 1.79 1.74 1.79h6.38l-2.79 4.58h-3.59c-.89 0-1.74.81-1.74 1.77 0 .97.85 1.78 1.74 1.78" />
  </svg>
);
export default SvgNotequalBold;
