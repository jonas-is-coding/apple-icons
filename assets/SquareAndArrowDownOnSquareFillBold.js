import * as React from "react";
const SvgSquareandarrowdownonsquarefillBold = ({
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
    <path d="M4.142 25.87h13.57c2.68 0 4.13-1.46 4.13-4.11V10.43c0-2.66-1.45-4.11-4.13-4.11h-5.43v-5c0-.71-.6-1.32-1.36-1.32-.75 0-1.35.61-1.35 1.32v5h2.71v6.5l-.12 1.72.55-.84 1.43-1.52c.23-.25.54-.39.88-.39.62 0 1.17.46 1.17 1.12 0 .36-.13.6-.36.84l-3.83 3.68c-.36.35-.72.48-1.08.48s-.71-.13-1.07-.48l-3.84-3.68c-.23-.24-.36-.48-.36-.84 0-.66.55-1.12 1.17-1.12.34 0 .65.14.89.39l1.43 1.52.55.84-.12-1.72v-6.5h-5.43c-2.68 0-4.14 1.45-4.14 4.11v11.33c0 2.66 1.46 4.11 4.14 4.11m6.25 5.88h13.58c2.68 0 4.14-1.46 4.14-4.12V16.3c0-2.66-1.46-4.11-4.14-4.11h-.36v9.57c0 3.63-2.25 5.87-5.9 5.87H6.262v.11c.04 2.59 1.5 4.01 4.13 4.01" />
  </svg>
);
export default SvgSquareandarrowdownonsquarefillBold;
