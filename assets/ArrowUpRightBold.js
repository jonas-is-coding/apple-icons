import * as React from "react";
const SvgArrowuprightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m18.292 13.5.01-11.73c0-1.06-.71-1.77-1.78-1.77H4.782c-1 0-1.73.75-1.73 1.66s.76 1.61 1.72 1.61h4.35l3.85-.14-2.05 1.82L.572 15.32c-.36.37-.57.81-.57 1.25 0 .89.82 1.72 1.72 1.72.45 0 .88-.2 1.25-.56l10.38-10.36 1.82-2.05-.16 3.73v4.47c0 .96.7 1.73 1.62 1.73.91 0 1.66-.77 1.66-1.75" />
  </svg>
);
export default SvgArrowuprightBold;
