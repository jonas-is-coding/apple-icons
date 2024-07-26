import * as React from "react";
const SvgSquareandarrowuponsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 27.816h13.57c2.68 0 4.13-1.46 4.13-4.11v-11.33c0-2.66-1.45-4.11-4.13-4.11h-5.43v-3.18l-.12-1.72.62.91 1.36 1.45c.23.25.54.39.88.39.62 0 1.17-.47 1.17-1.14 0-.33-.13-.58-.36-.82l-3.83-3.69c-.36-.35-.72-.47-1.08-.47s-.71.12-1.07.47l-3.84 3.69c-.23.24-.36.49-.36.82 0 .67.55 1.14 1.17 1.14.34 0 .65-.14.89-.39l1.36-1.45.62-.91-.12 1.72v3.18h2.71v8.3a1.355 1.355 0 0 1-2.71 0v-8.3h-5.43c-2.68 0-4.14 1.45-4.14 4.11v11.33c0 2.66 1.46 4.11 4.14 4.11m6.25 5.88h13.58c2.68 0 4.14-1.46 4.14-4.12v-11.32c0-2.66-1.46-4.11-4.14-4.11h-.36v9.56c0 3.63-2.25 5.87-5.9 5.87H6.262v.11c.04 2.59 1.5 4.01 4.13 4.01" />
  </svg>
);
export default SvgSquareandarrowuponsquarefillBold;
