import * as React from "react";
const SvgVideoslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m4.84-6.5L6.472 7.524a.734.734 0 0 1 0-1.02c.28-.28.75-.28 1.02 0l10.74 10.73c.28.29.28.73 0 1.02-.28.27-.75.26-1.02 0m-1.72-5.04-5.51-5.5h3.51c1.31 0 2 .71 2 1.97Zm-9.83-3.53c0-.53.15-.97.43-1.27l8.42 8.43c-.29.16-.64.24-1.06.24h-5.76c-1.31 0-2.03-.64-2.03-1.9Zm10.52.89 1.89-1.61c.28-.22.55-.39.82-.39.49 0 .82.33.82.86v5.57c0 .53-.33.86-.82.86-.27 0-.54-.14-.82-.4l-1.89-1.69Z" />
  </svg>
);
export default SvgVideoslashcirclefillBold;
