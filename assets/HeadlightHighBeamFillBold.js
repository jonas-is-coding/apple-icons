import * as React from "react";
const SvgHeadlighthighbeamfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.832 10.29c-.01 2.2.16 4.43.8 6.7.77 2.62 2.25 3.59 5.32 3.59h.69c7.22 0 13.49-4.74 13.49-10.29 0-5.57-6.27-10.29-13.49-10.29h-.69c-3.06 0-4.52.97-5.32 3.57-.64 2.29-.81 4.5-.8 6.72M.002 3.52c0 .69.56 1.23 1.23 1.23h8.92c.23-1.13.4-1.81.65-2.46h-9.57c-.67 0-1.23.55-1.23 1.23m0 4.51c0 .68.56 1.24 1.23 1.24h8.45c.01-.81.07-1.64.16-2.47h-8.61c-.67 0-1.23.55-1.23 1.23m0 4.52c0 .68.56 1.23 1.23 1.23h8.61c-.09-.84-.14-1.66-.16-2.47h-8.45c-.67 0-1.23.57-1.23 1.24m0 4.51c0 .68.56 1.23 1.23 1.23l9.58.01c-.26-.69-.5-1.65-.66-2.47h-8.92c-.67 0-1.23.56-1.23 1.23" />
  </svg>
);
export default SvgHeadlighthighbeamfillBold;
