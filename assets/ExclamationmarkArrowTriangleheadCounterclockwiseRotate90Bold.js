import * as React from "react";
const SvgExclamationmarkarrowtriangleheadcounterclockwiserotate90Bold = ({
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
    <path d="M.93 9.946c-.94 0-1.18.79-.67 1.47l2.9 3.88c.37.5.99.49 1.36 0l2.89-3.89c.49-.67.27-1.46-.66-1.46H5.36a9.27 9.27 0 0 1 8.97-6.86c5.14 0 9.3 4.14 9.3 9.29 0 5.13-4.16 9.29-9.3 9.29-2.81 0-5.26-1.23-6.98-3.23-.66-.67-1.57-.88-2.29-.27-.64.54-.7 1.49 0 2.31 2.04 2.59 5.72 4.27 9.27 4.27 6.83 0 12.38-5.54 12.38-12.37S21.16-.004 14.33-.004c-6 0-11.01 4.28-12.14 9.95Zm13.41 4.1c.75 0 1.2-.42 1.23-1.23l.19-4.82c.05-.82-.56-1.4-1.44-1.4s-1.46.56-1.43 1.4l.19 4.85c.02.77.48 1.2 1.26 1.2m0 4.01c.87 0 1.55-.55 1.55-1.4 0-.84-.67-1.4-1.55-1.4-.89 0-1.57.56-1.57 1.4s.7 1.4 1.57 1.4" />
  </svg>
);
export default SvgExclamationmarkarrowtriangleheadcounterclockwiserotate90Bold;
