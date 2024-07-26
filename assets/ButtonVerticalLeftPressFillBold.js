import * as React from "react";
const SvgButtonverticalleftpressfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.902 7.23c0-4.32-2.59-7.23-6.6-7.23-4.04 0-6.63 2.91-6.63 7.23v2.05l3.74 3.27c1.34 1.17 1.34 3.12 0 4.3l-3.74 3.29v2.07c0 4.32 2.59 7.22 6.63 7.22 4.01 0 6.6-2.9 6.6-7.22Zm4.94 0c0-4.17-2.12-6.89-6.25-7.19 1.94 1.59 3.08 4.12 3.08 7.19v14.98c0 3.06-1.14 5.6-3.08 7.19 4.13-.29 6.25-3.02 6.25-7.19Zm-15.6 8.3c.54-.47.54-1.17 0-1.65l-3.96-3.49c-.82-.72-1.96-.24-1.96.85v2.08h-5.94c-.83 0-1.38.61-1.38 1.4 0 .77.55 1.38 1.38 1.38h5.94v2.05c0 1.16 1.14 1.6 1.96.87Z" />
  </svg>
);
export default SvgButtonverticalleftpressfillBold;
