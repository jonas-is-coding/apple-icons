import * as React from "react";
const SvgButtonverticalrightpressBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 7.23v14.98c0 4.43 2.88 7.22 7.44 7.22h4.11c4.02 0 6.61-2.9 6.61-7.22v-2.05l-3.02-2.68v4.73c0 2.47-1.42 4.2-3.6 4.2-2.17 0-3.6-1.73-3.6-4.2V7.23c0-2.47 1.43-4.21 3.6-4.21 2.18 0 3.6 1.74 3.6 4.21v4.71l3.02-2.66V7.23c0-4.32-2.59-7.22-6.61-7.23h-4.11C2.882 0 .002 2.8.002 7.23m4.93 0v14.98c0 1.52.32 2.88.92 3.98-1.76-.53-2.83-1.97-2.83-3.98V7.23c0-2.03 1.07-3.47 2.83-4-.6 1.12-.92 2.47-.92 4m10.67 8.3 3.96 3.49c.82.73 1.95.29 1.95-.87V16.1h5.95c.83 0 1.38-.61 1.38-1.38 0-.79-.55-1.4-1.38-1.4h-5.95v-2.08c0-1.09-1.12-1.57-1.95-.85l-3.96 3.49c-.54.48-.54 1.18 0 1.65" />
  </svg>
);
export default SvgButtonverticalrightpressBold;
