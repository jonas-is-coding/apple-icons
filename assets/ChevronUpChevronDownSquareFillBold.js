import * as React from "react";
const SvgChevronupchevrondownsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.19-18.01c.32 0 .6.13.87.39l3.74 3.58c.21.21.37.5.37.81 0 .62-.53 1.07-1.08 1.07-.27 0-.56-.1-.78-.29l-3.12-3.06-3.12 3.06c-.22.21-.52.29-.78.29-.55 0-1.09-.45-1.09-1.07 0-.33.17-.6.38-.81l3.73-3.58c.27-.26.56-.39.88-.39m0 13.62c-.32 0-.61-.14-.88-.39l-3.73-3.6c-.21-.2-.38-.48-.38-.79 0-.64.54-1.07 1.09-1.07.26 0 .56.08.78.29l3.12 3.06 3.12-3.06c.22-.21.51-.29.78-.29.55 0 1.08.43 1.08 1.07 0 .3-.16.59-.37.79l-3.74 3.6c-.26.25-.55.39-.87.39" />
  </svg>
);
export default SvgChevronupchevrondownsquarefillBold;
