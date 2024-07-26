import * as React from "react";
const SvgPointtopleftdowntopointbottomrightfilledcurvepathBold = ({
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
    <path d="M2.882 8.708c0 2.79 1.63 4.66 4.75 5.43l5.94 1.51c1.77.44 2.67 1.34 2.67 2.65v.26c-1.69.6-2.89 2.21-2.89 4.11 0 2.39 1.95 4.33 4.36 4.33 2.39 0 4.33-1.94 4.33-4.33 0-1.9-1.21-3.51-2.89-4.11v-.26c0-2.79-1.62-4.67-4.74-5.43l-5.95-1.51c-1.75-.46-2.66-1.36-2.66-2.65v-.27c1.69-.6 2.89-2.21 2.89-4.1 0-2.39-1.95-4.34-4.36-4.34a4.34 4.34 0 0 0-4.33 4.34c0 1.89 1.21 3.5 2.88 4.1Zm1.45-2.73c-.91 0-1.62-.73-1.62-1.64 0-.93.71-1.64 1.62-1.64.94 0 1.66.7 1.66 1.64 0 .92-.72 1.64-1.66 1.64" />
  </svg>
);
export default SvgPointtopleftdowntopointbottomrightfilledcurvepathBold;
