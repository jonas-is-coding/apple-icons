import * as React from "react";
const SvgBoltheartfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.202 22.638c.38 0 .97-.34 1.51-.69 6.44-4.21 10.68-9.22 10.68-14.25 0-4.6-3.2-7.7-7.04-7.7-2.4 0-4.12 1.31-5.15 3.24-1.03-1.91-2.77-3.24-5.16-3.24-3.83 0-7.04 3.1-7.04 7.7 0 5.03 4.23 10.04 10.69 14.25.52.35 1.11.69 1.51.69m-3.96-10.38c0-.14.06-.28.16-.4l4.72-5.79c.44-.53 1.15-.14.91.51l-1.5 3.93h2.81c.27 0 .49.2.49.47 0 .14-.06.28-.18.4l-4.71 5.79c-.43.53-1.16.15-.91-.5l1.5-3.94h-2.8c-.28 0-.49-.2-.49-.47" />
  </svg>
);
export default SvgBoltheartfillBold;
