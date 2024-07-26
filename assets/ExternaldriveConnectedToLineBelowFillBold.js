import * as React from "react";
const SvgExternaldriveconnectedtolinebelowfillBold = ({
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
    <path d="M4.692 8.179h16.37c1.18 0 2.26.26 3.18.76l-2.75-6.2c-.77-1.75-2.26-2.74-4.31-2.74h-8.63c-2.04 0-3.51.99-4.29 2.74l-2.75 6.19c.91-.49 1.99-.75 3.18-.75m-2.48 17.44h7.88a3.06 3.06 0 0 0 2.78 1.78c1.21 0 2.28-.73 2.76-1.78h7.89c.7 0 1.28-.58 1.28-1.28 0-.71-.58-1.3-1.28-1.3h-7.89c-.3-.64-.83-1.17-1.48-1.48v-2.32h6.91c2.79 0 4.67-1.88 4.67-4.65 0-2.78-1.88-4.66-4.67-4.66H4.692c-2.8 0-4.69 1.88-4.69 4.66 0 2.77 1.89 4.65 4.69 4.65h6.89v2.32c-.66.31-1.19.84-1.49 1.48h-7.88c-.7 0-1.29.59-1.29 1.3 0 .7.59 1.28 1.29 1.28m17.39-11.03c0-.81.71-1.5 1.52-1.5.82 0 1.52.69 1.52 1.5 0 .84-.7 1.49-1.52 1.5-.81.01-1.52-.66-1.52-1.5" />
  </svg>
);
export default SvgExternaldriveconnectedtolinebelowfillBold;
