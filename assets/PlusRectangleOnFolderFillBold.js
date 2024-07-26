import * as React from "react";
const SvgPlusrectangleonfolderfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.332 15.141h10.04c2.6 0 4.03-1.43 4.03-4.02v-7.1c0-2.59-1.43-4.02-4.03-4.02h-10.04c-2.62 0-4.03 1.43-4.03 4.02v7.1c0 2.59 1.41 4.02 4.03 4.02m-18.33-6.5h12.39v-4.31c0-.51.05-1.04.09-1.31-.2-.01-.33-.02-.53-.02-.57-.06-.96-.25-1.44-.65l-.45-.36c-.91-.71-1.53-.95-2.88-.95h-3.27c-2.42 0-3.91 1.47-3.91 4.11Zm23.35 2.91c-.57 0-.93-.37-.93-.92v-2.12h-2.11c-.55 0-.94-.38-.94-.94s.37-.94.94-.94h2.11v-2.1c0-.55.36-.93.93-.93s.94.37.94.93v2.1h2.11c.55 0 .93.38.93.94s-.38.94-.93.94h-2.11v2.12c0 .55-.37.92-.94.92m-19.21 12h19.2c2.49 0 3.94-1.59 3.94-4.24v-2.27h-8.95c-3.66 0-5.94-2.26-5.94-5.84v-.62H.002v8.86c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgPlusrectangleonfolderfillBold;
