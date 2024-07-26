import * as React from "react";
const SvgBolttrianglebadgeexclamationmarkfillBold = ({
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
    <path d="M.981 16.306h7.09l-3.7 9.79c-.54 1.41.91 2.15 1.85 1.01l5.66-6.9 2.37-4.24c.63-1.14 1.72-1.68 2.61-1.76l.87-1.11c.2-.26.3-.52.3-.8 0-.54-.42-.94-.98-.94h-7.09l3.7-9.79c.53-1.4-.92-2.15-1.86-1.01L.341 14.506c-.24.29-.34.56-.34.86 0 .54.41.94.98.94m11.31 12.01h9.96c1.03 0 1.74-.8 1.74-1.73 0-.3-.08-.58-.24-.86l-4.98-8.92c-.35-.61-.91-.89-1.5-.89-.58 0-1.16.31-1.5.89l-4.97 8.93c-.15.27-.23.55-.23.85 0 .93.69 1.73 1.72 1.73m4.98-4.66c-.51 0-.89-.36-.91-.85l-.1-3.06c-.02-.58.4-.99 1.01-.99.6 0 1.03.41 1.01.99l-.09 3.06c-.03.49-.4.85-.92.85m0 2.94c-.65 0-1.16-.48-1.16-1.12s.52-1.1 1.16-1.1c.66 0 1.16.47 1.16 1.1 0 .64-.49 1.12-1.16 1.12" />
  </svg>
);
export default SvgBolttrianglebadgeexclamationmarkfillBold;
