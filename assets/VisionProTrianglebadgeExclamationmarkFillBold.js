import * as React from "react";
const SvgVisionprotrianglebadgeexclamationmarkfillBold = ({
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
    <path d="M27.192 12.408h9.96c1.03 0 1.73-.79 1.73-1.73 0-.3-.07-.59-.23-.86l-4.98-8.92c-.34-.6-.91-.9-1.49-.9-.6 0-1.17.31-1.5.9l-4.98 8.92c-.15.27-.24.56-.24.86 0 .94.69 1.73 1.73 1.73m-9.12 6.07c2.64 0 4.9 4.09 9.87 4.09 4.34 0 7.6-3.5 8.11-8.41h-8.86c-2.01 0-3.48-1.57-3.48-3.48 0-.6.16-1.2.46-1.72l3.25-5.83c-2.74-.53-5.94-.63-9.35-.63-9.86 0-18.07.89-18.07 10.26 0 5.64 3.47 9.81 8.21 9.81 4.97 0 7.23-4.09 9.86-4.09m14.1-10.73c-.52 0-.89-.37-.91-.86l-.1-3.06c-.02-.57.41-.98 1.01-.98.59 0 1.03.4 1 .98l-.09 3.06c-.02.49-.4.86-.91.86m0 2.93c-.66 0-1.16-.48-1.16-1.12 0-.63.51-1.1 1.16-1.1s1.17.47 1.17 1.1c-.01.64-.51 1.12-1.17 1.12" />
  </svg>
);
export default SvgVisionprotrianglebadgeexclamationmarkfillBold;
