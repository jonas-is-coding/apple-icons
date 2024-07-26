import * as React from "react";
const SvgCarwindowleftexclamationmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.012 22.347c2.68 0 4.13-1.44 4.13-4.11v-5.53c0-1.88-.54-2.98-2.08-4.14l-9.16-6.87c-1.67-1.24-3-1.7-5.07-1.7h-5.74c-2.64 0-4.09 1.44-4.09 4.07v14.17c0 2.67 1.44 4.11 4.14 4.11Zm-1.27-11.23H4.422c-.89 0-1.4-.56-1.4-1.4v-5.29c0-.95.49-1.4 1.4-1.4h5.69c1.17 0 1.86.21 2.7.86l8.2 6.18c.49.36.33 1.05-.27 1.05m11.22 2.41c.91 0 1.51-.55 1.54-1.52l.26-7.02c.04-1.07-.68-1.79-1.82-1.79s-1.87.72-1.82 1.79l.27 7.05c.03.94.63 1.49 1.57 1.49m0 5.56c1.14 0 1.99-.79 1.99-1.86 0-1.08-.83-1.86-1.99-1.86-1.18 0-2.02.78-2.02 1.86 0 1.07.86 1.86 2.02 1.86" />
  </svg>
);
export default SvgCarwindowleftexclamationmarkBold;
