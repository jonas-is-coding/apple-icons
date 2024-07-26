import * as React from "react";
const SvgChevronleftforwardslashchevronrightBold = ({
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
    <path d="M14.492 23.13c1.07.31 2.06-.27 2.37-1.35l5.65-19.34c.32-1.06-.21-2.05-1.28-2.36-1.05-.29-2.01.21-2.35 1.36l-5.63 19.29c-.33 1.09.17 2.1 1.24 2.4M.002 11.59c-.01.53.23 1.08.7 1.5l7.14 6.44c.85.77 1.99.73 2.72-.08.72-.81.65-1.94-.18-2.7l-5.71-5.16 5.71-5.17c.83-.75.9-1.89.18-2.71-.73-.8-1.87-.84-2.72-.08l-7.14 6.45c-.47.42-.71.98-.7 1.51m35.71 0c0-.53-.24-1.09-.72-1.51l-7.14-6.45c-.84-.76-1.98-.72-2.7.08-.73.82-.66 1.96.17 2.71l5.71 5.17-5.71 5.16c-.83.76-.9 1.89-.17 2.7.72.81 1.86.85 2.7.08l7.14-6.44c.48-.42.72-.97.72-1.5" />
  </svg>
);
export default SvgChevronleftforwardslashchevronrightBold;
