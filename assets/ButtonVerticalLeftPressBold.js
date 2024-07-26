import * as React from "react";
const SvgButtonverticalleftpressBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.842 7.23c0-4.43-2.88-7.23-7.44-7.23h-4.12c-4.02 0-6.61 2.91-6.61 7.23v2.05l3.03 2.66V7.23c0-2.47 1.42-4.21 3.6-4.21 2.17 0 3.59 1.74 3.59 4.21v14.98c0 2.47-1.42 4.2-3.59 4.2-2.18 0-3.6-1.73-3.6-4.2v-4.73l-3.03 2.68v2.05c0 4.32 2.59 7.22 6.61 7.22h4.12c4.56 0 7.44-2.79 7.44-7.22Zm-4.94 0c0-1.53-.31-2.88-.91-4 1.76.53 2.82 1.97 2.82 4v14.98c0 2.01-1.06 3.45-2.82 3.98.6-1.1.91-2.46.91-3.98Zm-10.66 8.3c.54-.47.54-1.17 0-1.65l-3.96-3.49c-.82-.72-1.96-.24-1.96.85v2.08h-5.94c-.83 0-1.38.61-1.38 1.4 0 .77.55 1.38 1.38 1.38h5.94v2.05c0 1.16 1.14 1.6 1.96.87Z" />
  </svg>
);
export default SvgButtonverticalleftpressBold;
