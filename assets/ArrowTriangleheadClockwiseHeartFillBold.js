import * as React from "react";
const SvgArrowtriangleheadclockwiseheartfillBold = ({
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
    <path d="M12.202 22.643c.38 0 .97-.33 1.51-.68 6.44-4.22 10.68-9.23 10.68-14.26 0-4.6-3.2-7.7-7.04-7.7-2.4 0-4.12 1.32-5.15 3.23-1.03-1.91-2.77-3.23-5.16-3.23-3.83 0-7.04 3.1-7.04 7.7 0 5.03 4.23 10.04 10.69 14.26.52.35 1.11.68 1.51.68m-4.36-10.62c0-1.91 1.43-3.59 3.23-3.98v-.87c0-.54.58-.75 1.01-.4l1.95 1.62c.38.31.38.79 0 1.13l-1.95 1.63c-.42.37-1.01.14-1.01-.4v-.91c-.9.35-1.51 1.21-1.51 2.19 0 1.33 1.06 2.38 2.38 2.38s2.38-1.05 2.38-2.38c0-.48.39-.87.87-.87.46 0 .86.39.86.87 0 2.28-1.84 4.13-4.11 4.13s-4.1-1.85-4.1-4.14" />
  </svg>
);
export default SvgArrowtriangleheadclockwiseheartfillBold;
