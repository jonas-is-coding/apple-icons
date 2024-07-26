import * as React from "react";
const SvgSpeakerbadgeexclamationmarkfillBold = ({
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
    <path d="M13.153 21.495c1.05 0 1.84-.8 1.84-1.84V1.875c0-1.04-.79-1.88-1.86-1.88-.68 0-1.19.27-1.91.95l-4.74 4.42a.35.35 0 0 1-.24.1h-3.25c-1.94 0-2.99 1.1-2.99 3.12v4.34c0 2.03 1.05 3.12 2.99 3.12h3.25c.09 0 .17.02.23.08l4.75 4.45c.67.64 1.22.92 1.93.92m11.27-4.6c3.36 0 6.17-2.8 6.17-6.17 0-3.38-2.78-6.17-6.17-6.17-3.38 0-6.17 2.79-6.17 6.17s2.79 6.17 6.17 6.17m0-5.14c-.55 0-.95-.38-.97-.92l-.11-3.24c-.02-.61.43-1.06 1.08-1.06.66 0 1.11.44 1.09 1.06l-.11 3.24c-.02.54-.43.92-.98.92m0 3.13c-.72 0-1.24-.51-1.24-1.2 0-.68.54-1.17 1.24-1.17s1.24.5 1.24 1.17c0 .69-.53 1.2-1.24 1.2" />
  </svg>
);
export default SvgSpeakerbadgeexclamationmarkfillBold;
