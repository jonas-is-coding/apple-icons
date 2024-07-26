import * as React from "react";
const SvgArrowcounterclockwisesquarefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m12.56-10.65c0 3.02-2.43 5.46-5.42 5.46-3 0-5.42-2.44-5.42-5.44 0-.58.48-1.06 1.06-1.06.6 0 1.09.48 1.09 1.06a3.26 3.26 0 0 0 3.27 3.28 3.26 3.26 0 0 0 3.27-3.28c0-1.58-1.12-2.94-2.58-3.07-.11-.02-.23-.03-.35-.06l.65.67c.1.13.16.33.16.55 0 .61-.43.98-.99.98-.26 0-.54-.12-.71-.3l-2.2-2.21c-.4-.39-.38-1.06-.01-1.43l2.19-2.22c.19-.2.44-.35.75-.35.62 0 1 .46 1 .94 0 .3-.15.49-.26.66l-.48.5c.08 0 .18 0 .27.01 2.55.21 4.71 2.52 4.71 5.31" />
  </svg>
);
export default SvgArrowcounterclockwisesquarefillBold;
