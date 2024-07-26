import * as React from "react";
const SvgCarwindowrightbadgeexclamationmarkBold = ({
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
    <path d="M24.652 12.343c3.36 0 6.17-2.82 6.17-6.18 0-3.37-2.79-6.16-6.17-6.16s-6.17 2.79-6.17 6.16c0 3.38 2.79 6.18 6.17 6.18m0-5.15c-.56 0-.96-.37-.98-.92l-.11-3.24c-.02-.62.44-1.05 1.09-1.05s1.11.43 1.09 1.05l-.1 3.24c-.02.55-.43.92-.99.92m-20.51 17.24h17.87c2.69 0 4.13-1.44 4.13-4.11v-6.38c-.5.11-1.05.17-1.59.15a7.26 7.26 0 0 1-3.72-.89H5.412c-.61 0-.77-.69-.28-1.05l8.2-6.18c.85-.64 1.53-.86 2.71-.86h.79c.1-1.11.48-2.14 1.03-3.03h-1.54c-2.07 0-3.41.46-5.08 1.7l-9.14 6.87c-1.56 1.16-2.1 2.26-2.1 4.14v5.53c0 2.67 1.45 4.11 4.14 4.11m20.5-14.11c-.7 0-1.24-.5-1.24-1.19 0-.68.54-1.19 1.24-1.19.72 0 1.26.52 1.26 1.19 0 .69-.53 1.19-1.26 1.19" />
  </svg>
);
export default SvgCarwindowrightbadgeexclamationmarkBold;
