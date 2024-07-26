import * as React from "react";
const SvgArrowbackwardtolinesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.32-5.74c-.61 0-1.09-.47-1.09-1.08v-8.6c0-.61.48-1.08 1.09-1.08.6 0 1.07.47 1.07 1.08v8.6c0 .61-.47 1.08-1.07 1.08m12.21-5.37c0 .67-.48 1.13-1.18 1.13h-4.17l-1.84-.15 1.71 1.48.77.74c.22.21.36.47.36.82 0 .61-.45 1.06-1.1 1.06-.27 0-.59-.12-.8-.35l-3.82-3.91c-.21-.21-.34-.5-.34-.82 0-.33.14-.62.34-.83l3.83-3.91c.22-.25.51-.35.79-.35.63 0 1.1.44 1.1 1.06 0 .33-.13.59-.36.81l-.77.76-1.7 1.48 1.83-.13h4.17c.7 0 1.18.44 1.18 1.11" />
  </svg>
);
export default SvgArrowbackwardtolinesquarefillBold;
