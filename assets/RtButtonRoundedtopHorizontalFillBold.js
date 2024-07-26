import * as React from "react";
const SvgRtbuttonroundedtophorizontalfillBold = ({
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
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm7.52 15.56c-.56 0-1.03-.46-1.03-1.03v-6.82h-1.13c-.46 0-.83-.37-.83-.85 0-.45.37-.82.83-.82h4.29a.835.835 0 1 1 0 1.67h-1.1v6.82c0 .57-.45 1.03-1.03 1.03m-8.74.01c-.68 0-1.04-.41-1.04-1.09v-7.35c0-.69.36-1.09 1.03-1.09h1.88c1.89 0 3.03 1.02 3.03 3 0 .99-.34 2.01-1.17 2.51l.91 2.37c.1.24.16.44.16.63.02.66-.43 1.02-.96 1.02-.55 0-.88-.29-1.06-.87l-.99-2.72h-.76v2.5c0 .67-.37 1.09-1.03 1.09m1.03-5.04h.66c.78 0 1.1-.67 1.1-1.45 0-.76-.35-1.45-1.1-1.45h-.66Z" />
  </svg>
);
export default SvgRtbuttonroundedtophorizontalfillBold;
