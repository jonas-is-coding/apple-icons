import * as React from "react";
const SvgCarseatleftforwardandbackwardfillBold = ({
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
    <path d="M.223 20.668c1.13 4.11 2.26 5.36 4.89 5.36h14.27c1.93 0 3.21-1.04 3.69-3l4.56-18.42c.72-2.89-.71-4.61-2.82-4.61-2.53 0-4.62 2.46-4.28 5.73-2.91 2.04-4.2 5.65-3.64 10.03-2.41-.42-5.33-.66-8.22-.66-6.78 0-9.52 1.75-8.45 5.57m8.78 13.63v-5.12c0-.82-.75-1.22-1.47-.8l-4.16 2.51c-.66.41-.68 1.29 0 1.7l4.16 2.5c.71.42 1.47.06 1.47-.79m5.93 0c0 .85.75 1.21 1.44.8l4.16-2.51c.69-.4.68-1.29 0-1.69l-4.16-2.5c-.7-.43-1.44-.04-1.44.78Z" />
  </svg>
);
export default SvgCarseatleftforwardandbackwardfillBold;
