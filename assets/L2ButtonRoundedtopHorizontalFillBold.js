import * as React from "react";
const SvgL2ButtonroundedtophorizontalfillBold = ({
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
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm5.18 15.51c-.65 0-.98-.31-.98-.82 0-.39.19-.7.56-1.15l1.79-2.28c.68-.87 1.3-1.78 1.3-2.69 0-.7-.28-1.26-.89-1.26-.58 0-.8.44-.97 1.07-.16.49-.47.7-.92.7-.55 0-.87-.39-.87-.9 0-1.32 1.24-2.49 2.76-2.49 1.69 0 2.86 1.09 2.86 2.8 0 1.22-.54 2.11-1.61 3.42l-1.51 1.86v.1h2.49c.55 0 .8.36.8.82s-.25.82-.8.82Zm-5.78.03c-.67 0-1.03-.43-1.03-1.11v-7.6c0-.58.47-1.04 1.05-1.04s1.06.46 1.06 1.04v6.97h2.05c.47 0 .87.4.87.87s-.4.87-.87.87Z" />
  </svg>
);
export default SvgL2ButtonroundedtophorizontalfillBold;
