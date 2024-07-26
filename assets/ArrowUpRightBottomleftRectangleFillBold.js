import * as React from "react";
const SvgArrowuprightbottomleftrectanglefillBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.94-5.43c-.67 0-1.09-.48-1.09-1.21v-1.48l.15-1.43-1.37 1.54-3.15 3.15c-.28.28-.59.4-.94.4-.69 0-1.22-.48-1.22-1.22 0-.3.14-.63.39-.89l3.19-3.18 1.54-1.38-1.36.19h-1.58c-.72 0-1.2-.42-1.2-1.09 0-.66.48-1.07 1.21-1.07h5.07c.89 0 1.43.48 1.43 1.42v5.04c0 .71-.43 1.21-1.07 1.21" />
  </svg>
);
export default SvgArrowuprightbottomleftrectanglefillBold;
