import * as React from "react";
const SvgYieldsignfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55-.004C1.41-.004 0 1.626 0 3.546c0 .6.15 1.22.48 1.79l9.02 15.77a3.51 3.51 0 0 0 3.07 1.78c1.2 0 2.37-.59 3.06-1.78l9.03-15.76c.33-.58.48-1.2.48-1.8 0-1.92-1.41-3.55-3.55-3.55Zm2.01 3.93h14.01c.55 0 .89.55.62 1.05l-7.01 12.33c-.29.51-.94.51-1.23 0L4.93 4.976c-.27-.5.07-1.05.63-1.05" />
  </svg>
);
export default SvgYieldsignfillBold;
