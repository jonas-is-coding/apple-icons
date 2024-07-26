import * as React from "react";
const SvgChineseyuanrenminbisignsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m7.14-5.53c-.66 0-1.1-.44-1.1-1.12v-1.13h-2.38c-.2 0-.36-.16-.36-.36 0-.21.16-.38.36-.38h2.38v-1.12l-.06-.1h-2.32c-.2 0-.36-.16-.36-.36 0-.21.16-.37.36-.37h1.91l-2.82-4.57a1.6 1.6 0 0 1-.22-.77c0-.65.48-1.07 1.13-1.07.54 0 .81.24 1.06.71l2.41 4.44h.05l2.42-4.44c.24-.48.59-.7 1.04-.7.63 0 1.11.41 1.11 1.04 0 .29-.08.52-.24.77l-2.82 4.59h1.93c.21 0 .37.16.37.37 0 .2-.16.36-.37.36h-2.33l-.06.1v1.12h2.39c.21 0 .37.17.37.38 0 .2-.16.36-.37.36h-2.39v1.13c0 .68-.43 1.12-1.09 1.12" />
  </svg>
);
export default SvgChineseyuanrenminbisignsquarefillBold;
