import * as React from "react";
const SvgIpadcaseandiphonecaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.902 27.876h8.27c-.5-.64-.77-1.49-.77-2.41v-12.19c0-1.83 1.04-3.25 2.81-3.71h.06v-4.45c0-.57.46-1.04 1.04-1.04s1.06.47 1.06 1.04v4.28h4.76v-5.58c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82m4.89-4.08c-.57 0-1.06-.46-1.06-1.04V5.116c0-.57.49-1.04 1.06-1.04.58 0 1.05.47 1.05 1.04v17.64c0 .58-.47 1.04-1.05 1.04m6.58 4.05h6.09c1.47 0 2.39-.92 2.39-2.39v-12.18c0-1.46-.92-2.38-2.39-2.38h-6.09c-1.51 0-2.47.92-2.47 2.38v12.19c0 1.46.96 2.38 2.47 2.38m.31-11.49c-.55 0-.89-.31-.89-.83v-1.76c0-.5.34-.83.89-.83h1.63c.56 0 .9.33.9.83v1.76c0 .52-.34.83-.9.83Z" />
  </svg>
);
export default SvgIpadcaseandiphonecaseBold;
