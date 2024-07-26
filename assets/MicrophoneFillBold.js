import * as React from "react";
const SvgMicrophonefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.823 17.179c2.43 0 4.46-1.84 4.46-4.6v-7.97c0-2.76-2.03-4.61-4.46-4.61-2.45 0-4.49 1.84-4.49 4.6v7.98c0 2.76 2.04 4.6 4.49 4.6m-9.82-4.21c0 5.23 3.52 8.69 8.41 9.24v1.84h-4.22c-.82 0-1.51.64-1.51 1.46 0 .8.69 1.47 1.51 1.47h11.25c.81 0 1.5-.67 1.5-1.47 0-.82-.69-1.46-1.5-1.46h-4.22v-1.84c4.89-.55 8.41-4.01 8.41-9.24v-2.22c0-.8-.67-1.43-1.48-1.43-.82 0-1.5.63-1.5 1.43v2.13c0 3.98-2.87 6.57-6.83 6.57-3.98 0-6.83-2.59-6.83-6.57v-2.13c0-.8-.68-1.43-1.5-1.43-.83 0-1.49.63-1.49 1.43Z" />
  </svg>
);
export default SvgMicrophonefillBold;
