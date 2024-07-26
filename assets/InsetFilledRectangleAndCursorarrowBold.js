import * as React from "react";
const SvgInsetfilledrectangleandcursorarrowBold = ({
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
    <path d="M4.142 22.402h15.23c-.04-.17-.05-.36-.05-.56l.05-2.46H4.462c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v8.3l3.02 3.04v-11.7c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m1.52-4.92h13.74l.05-4.62c.04-1.82 1.92-2.84 3.35-2.05l.25.25v-5.38c0-.49-.26-.76-.74-.76H5.662c-.48 0-.74.27-.74.76v11.04c0 .49.26.76.74.76m15.43 4.43c-.01.61.68.83 1.08.41l1.48-1.56 1.72 4.29c.14.34.44.56.85.41l1.18-.43c.41-.15.42-.6.29-.86l-1.85-4.26 2.2-.01c.59.01.88-.6.46-1.04l-6.28-6.36c-.39-.4-.98-.16-.99.4Z" />
  </svg>
);
export default SvgInsetfilledrectangleandcursorarrowBold;
