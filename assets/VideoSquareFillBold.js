import * as React from "react";
const SvgVideosquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.5-6.5c-1.3 0-2.04-.65-2.04-1.9v-5.5c0-1.25.77-1.97 2.04-1.97h5.79c1.31 0 1.99.72 1.99 1.97v5.43c0 1.24-.71 1.97-2.02 1.97Zm8.49-2.8v-3.72l1.87-1.59c.28-.24.56-.39.83-.39.48 0 .82.33.82.86v5.96c0 .54-.34.87-.82.87-.27 0-.55-.15-.83-.39Z" />
  </svg>
);
export default SvgVideosquarefillBold;
