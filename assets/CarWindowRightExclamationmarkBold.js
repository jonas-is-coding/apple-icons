import * as React from "react";
const SvgCarwindowrightexclamationmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.347h17.87c2.69 0 4.13-1.44 4.13-4.11V4.067c0-2.63-1.44-4.07-4.09-4.07h-5.73c-2.07 0-3.41.46-5.08 1.7l-9.14 6.87c-1.56 1.16-2.1 2.26-2.1 4.14v5.53c0 2.67 1.45 4.11 4.14 4.11m1.27-11.23c-.61 0-.77-.69-.28-1.05l8.2-6.18c.84-.65 1.53-.86 2.71-.86h5.68c.91 0 1.4.45 1.4 1.4v5.29c0 .84-.49 1.4-1.4 1.4Zm26.55 2.41c.91 0 1.51-.55 1.54-1.52l.26-7.02c.04-1.07-.68-1.79-1.82-1.79s-1.87.72-1.82 1.79l.27 7.05c.03.94.63 1.49 1.57 1.49m0 5.56c1.14 0 1.99-.79 1.99-1.86 0-1.08-.83-1.86-1.99-1.86-1.18 0-2.02.78-2.02 1.86 0 1.07.86 1.86 2.02 1.86" />
  </svg>
);
export default SvgCarwindowrightexclamationmarkBold;
