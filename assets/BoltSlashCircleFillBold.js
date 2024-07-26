import * as React from "react";
const SvgBoltslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m2.7-19.35-1.99 5.2-2.23-2.24 2.98-3.67c.59-.72 1.57-.19 1.24.71m2.45 13.15-11.31-11.3a.743.743 0 0 1 0-1.02c.29-.28.75-.28 1.03 0l11.3 11.3c.28.28.28.72 0 1.02-.28.27-.74.25-1.02 0m-4.24-7.76h3.57c.36 0 .67.28.67.64 0 .19-.08.39-.21.55l-1.28 1.56Zm-2.03 2.94h-3.38c-.37 0-.68-.28-.68-.64 0-.19.09-.38.23-.56l1.19-1.46Zm2.54 2.54-2.94 3.61c-.6.73-1.58.2-1.24-.7l1.94-5.16Z" />
  </svg>
);
export default SvgBoltslashcirclefillBold;
