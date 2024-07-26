import * as React from "react";
const SvgZlbuttonroundedtophorizontalfillBold = ({
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
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm6.15 15.43c-.66 0-1.02-.41-1.02-1.08v-7.43c0-.56.46-1.03 1.04-1.03.55 0 1.01.47 1.01 1.03v6.81h2.03c.46 0 .84.39.84.86 0 .45-.38.84-.84.84Zm-7 .01c-.61 0-1.02-.35-1.02-.95 0-.28.06-.54.2-.81l3.09-5.88v-.06h-2.43c-.55 0-.89-.37-.89-.84 0-.53.42-.85.89-.85h3.64c.6 0 1.02.39 1.02.99 0 .33-.11.59-.22.8l-3.05 5.84v.07h2.61c.43 0 .82.31.82.86 0 .48-.34.83-.82.83Z" />
  </svg>
);
export default SvgZlbuttonroundedtophorizontalfillBold;
