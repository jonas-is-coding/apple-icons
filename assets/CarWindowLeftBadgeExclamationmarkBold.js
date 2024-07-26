import * as React from "react";
const SvgCarwindowleftbadgeexclamationmarkBold = ({
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
    <path d="M6.176 12.343c3.38 0 6.16-2.8 6.16-6.18 0-3.37-2.78-6.16-6.16-6.16-3.39 0-6.18 2.79-6.18 6.16 0 3.36 2.82 6.18 6.18 6.18m0-5.15c-.56 0-.97-.37-.98-.92l-.11-3.24c-.02-.62.43-1.05 1.09-1.05.64 0 1.1.43 1.08 1.05l-.11 3.24c-.02.55-.42.92-.97.92m20.5 17.24c2.69 0 4.14-1.44 4.14-4.11v-5.53c0-1.88-.55-2.98-2.09-4.14l-9.14-6.87c-1.68-1.24-3.02-1.7-5.09-1.7h-1.55c.57.89.94 1.92 1.05 3.03h.78c1.17 0 1.86.22 2.7.86l8.2 6.18c.5.36.33 1.05-.27 1.05H9.986c-1.13.61-2.4.94-3.73.89-.53.02-1.09-.04-1.59-.15v6.38c0 2.67 1.45 4.11 4.15 4.11Zm-20.5-14.11c-.71 0-1.24-.5-1.25-1.19 0-.67.55-1.19 1.25-1.19s1.24.51 1.24 1.19c0 .69-.54 1.19-1.24 1.19" />
  </svg>
);
export default SvgCarwindowleftbadgeexclamationmarkBold;
