import * as React from "react";
const SvgExclamationmarkoctagonfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.022 24.282h7.27c1.57 0 2.58-.55 3.45-1.56l4.47-5.06c.88-1.01 1.1-1.65 1.1-3.01v-5.02c0-1.36-.33-1.91-1.24-3.01l-4.33-5.06c-.86-1.02-1.88-1.56-3.45-1.56h-7.27c-1.57 0-2.56.56-3.44 1.56l-4.47 5.06c-.89 1.02-1.11 1.65-1.11 3.01v5.02c0 1.36.22 2 1.11 3.01l4.47 5.06c.88 1.01 1.87 1.56 3.44 1.56m3.65-10.38c-.82 0-1.3-.46-1.35-1.29l-.19-5.06c-.03-.9.59-1.49 1.52-1.49.94 0 1.57.61 1.54 1.49l-.2 5.05c-.03.84-.52 1.3-1.32 1.3m0 4.23c-.93 0-1.66-.59-1.66-1.49 0-.88.72-1.48 1.66-1.48.93 0 1.65.6 1.65 1.48 0 .9-.72 1.49-1.65 1.49" />
  </svg>
);
export default SvgExclamationmarkoctagonfillBold;
