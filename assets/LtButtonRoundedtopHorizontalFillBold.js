import * as React from "react";
const SvgLtbuttonroundedtophorizontalfillBold = ({
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
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm-.13 15.43c-.66 0-1.02-.42-1.02-1.08v-7.43c0-.57.47-1.03 1.03-1.03s1.02.46 1.02 1.03v6.81h2.03c.45 0 .84.39.84.84 0 .47-.39.86-.84.86Zm6.7.13c-.57 0-1.03-.45-1.03-1.03v-6.81h-1.14c-.46 0-.83-.38-.83-.86 0-.44.37-.82.83-.82h4.3c.46 0 .84.38.84.82 0 .48-.38.86-.84.86h-1.11v6.81c0 .58-.46 1.03-1.02 1.03" />
  </svg>
);
export default SvgLtbuttonroundedtophorizontalfillBold;
