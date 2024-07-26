import * as React from "react";
const SvgMove3DBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.16 20.716c-.43 1 .02 1.76 1.09 1.89l4.88.55c1.49.19 2.33-.87 1.57-2.18l-.64-1.12 6.05-3.05 6.06 3.05-.65 1.12c-.77 1.31.09 2.37 1.58 2.18l4.87-.55c1.08-.13 1.52-.89 1.08-1.89l-1.96-4.51c-.58-1.35-1.93-1.55-2.66-.27l-.85 1.48-6.05-3.05v-7.3H16c1.52 0 2.01-1.24 1.11-2.46L14.19.666c-.65-.89-1.53-.89-2.19 0l-2.91 3.94c-.89 1.18-.38 2.46 1.11 2.46h1.5v7.3l-6.05 3.05-.86-1.48c-.73-1.28-2.07-1.08-2.66.27Z" />
  </svg>
);
export default SvgMove3DBold;
