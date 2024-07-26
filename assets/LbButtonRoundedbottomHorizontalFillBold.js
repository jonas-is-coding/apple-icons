import * as React from "react";
const SvgLbbuttonroundedbottomhorizontalfillBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m-.85-6.02c-.65 0-1.02-.42-1.02-1.08v-7.43c0-.56.47-1.03 1.04-1.03.56 0 1.03.47 1.03 1.03v6.81h2.01c.46 0 .85.39.85.86 0 .45-.39.84-.85.84Zm6.02 0c-.71 0-1.05-.45-1.05-1.08v-7.23c0-.61.34-1.07 1.05-1.07h2.39c1.4 0 2.35.86 2.35 2.34 0 .96-.63 1.9-1.53 2.05v.06c1.05.07 1.77 1.12 1.77 2.25 0 1.52-.89 2.68-2.5 2.68Zm1-5.48h.66c.76 0 1.12-.48 1.12-1.22 0-.68-.25-1.16-1-1.16h-.78Zm0 3.98h.78c.79 0 1.13-.56 1.13-1.36 0-.83-.42-1.32-1.16-1.32h-.75Z" />
  </svg>
);
export default SvgLbbuttonroundedbottomhorizontalfillBold;
